import express, { Express, Request, Response } from "express";

const app: Express = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("<h1>WELCOME TO TODO API</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
