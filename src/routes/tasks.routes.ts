import { Router } from "express";
import { createTask,getTask,getTasks,updateTask,deleteTask } from "../controllers/tasks.controller";
const router = Router();

//Routes
router.post("/",createTask);
router.get("/", getTasks);
router.get("/:id",getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask)

export default router