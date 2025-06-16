import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();


export const showHomePage = (_req: Request, res: Response) => {
    res.send("<h1>WELCOME TO TODO API</h1>");
}
//create new task
export const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    
    try {
        const newTask = await client.task.create({
        data: {
            title,
            description,
        },
        });
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

//get tasks
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await client.task.findMany({
            where:{
                completed: false
            }
        });
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

//get 1 task 
export const getTask = async (req: Request, res: Response) => {
    console.log(req.params)
    const { id } = req.params;

    try {
        const task = await client.task.findFirst({
            where: { id },
        });

        task
            ? res.status(200).json(task)
            : res.status(404).json({ error: "Task not found" });
    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

//updtae task
export const updateTask = async (req: Request, res: Response) => {
   console.log(req.params)
   console.log(req.body)

    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const updatedTask = await client.task.update({
            where: { id },
            data: {
                title,
                description,
                completed
            },
        });
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}


//delete task
export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id);
    try {
        await client.task.delete({
            where: { id },
        });
        res.status(200).json({ message: "Task deleted!" });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}