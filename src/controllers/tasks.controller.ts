import { Request,Response,NextFunction } from "express";
import * as TaskService from '../services/services.tasks'


//create new task
export const createTask = async (req:Request,res:Response,next:NextFunction) => {
    const { title,description } = req.body
    const task = {title,description}
    try {
        const newTask = await TaskService.createTask(task)
        res.status(201).json(newTask);
    } catch (error) {
       next(error)
    }
}

//get tasks
export const getTasks = async (req: Request, res: Response,next:NextFunction) => {
    try {
        //get all incomplete a.k.a pending tasks
        const tasks = await TaskService.getPendingTasks();
        res.status(200).json(tasks);
    } catch (error) {
       next(error)
    }
}

//get 1 task 
export const getTask = async (req: Request, res: Response,next:NextFunction) => {
    const { id } = req.params;

    try {
        const task = await TaskService.getTaskById(id)
        task
            ? res.status(200).json(task)
            : res.status(404).json({ error: "Task not found" });
    } catch (error) {
        next(error)
    }
}

//updtae task
export const updateTask = async (req: Request, res: Response,next:NextFunction) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = { title, description, completed }

    try {
        const updatedTask = await TaskService.updateTaskById(id,task)
        res.status(200).json(updatedTask);
    } catch (error) {
        next(error)
    }
}


//delete task
export const deleteTask = async (req: Request, res: Response,next:NextFunction) => {
    const { id } = req.params;
    try {
        await TaskService.deleteById(id)
        res.status(200).json({ message: "Task deleted!" });
    } catch (error) {
        next(error);
    }
}