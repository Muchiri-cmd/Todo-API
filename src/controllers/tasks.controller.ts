import { Request,Response,NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

//create new task
export const createTask = async (req: Request, res: Response,next:NextFunction) => {
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
       next(error)
    }
}

//get tasks
export const getTasks = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const tasks = await client.task.findMany({
            where:{
                completed: false
            }
        });
        res.status(200).json(tasks);
    } catch (error) {
       next(error)
    }
}

//get 1 task 
export const getTask = async (req: Request, res: Response,next:NextFunction) => {
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
        next(error)
    }
}

//updtae task
export const updateTask = async (req: Request, res: Response,next:NextFunction) => {
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
        next(error)
    }
}


//delete task
export const deleteTask = async (req: Request, res: Response,next:NextFunction) => {
    const { id } = req.params;
    console.log(id);
    try {
        await client.task.delete({
            where: { id },
        });
        res.status(200).json({ message: "Task deleted!" });
    } catch (error) {
        next(error);
    }
}