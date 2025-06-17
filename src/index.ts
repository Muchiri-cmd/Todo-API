import express, { Express, Request, Response } from "express";
import TasksRouter from "./routes/tasks.routes";
import { errorHandler } from "./middleware/errorHandler";

const app: Express = express();
app.use(express.json());

app.get("/", (_req,res) => {
  res.send("<h1>Welcome to The Typescript Tasks API</h1>")
})

app.use('/tasks',TasksRouter)
app.use(errorHandler)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
