import { Request, Response, NextFunction } from "express";

export const validateTask = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { title, description } = req.body;

  if (!title) {
    res.status(400).json({ message: "Title is a required field" });
  }

  if (!description) {
    res.status(400).json({ message: "Description is a required field" });
  }

  next();
};
