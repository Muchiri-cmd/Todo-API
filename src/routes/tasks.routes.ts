import { Router } from "express";
import {
  createTask,
  getTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller";
import { validateTask } from "../middleware/validateTasks";
const router = Router();

//Routes
router.post("/", validateTask, createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.put("/:id", validateTask, updateTask);
router.delete("/:id", deleteTask);

export default router;
