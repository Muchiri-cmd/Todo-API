import express, { Express, Request, Response } from "express";
import { createTask, deleteTask, getTask, getTasks, showHomePage, updateTask } from "./routes/tasks.controller";

const app: Express = express();
app.use(express.json());

//Routes
app.get("/",showHomePage)
app.post("/tasks",createTask);
app.get("/tasks", getTasks);
app.get("/tasks:/id",getTask);
app.put("/tasks/:id", updateTask);
app.delete("/tasks/:id", deleteTask)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
