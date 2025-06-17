import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

interface Task {
  title: string;
  description?: string;
  completed?: boolean;
}

export const createTask = async (task: Task) => {
  return await client.task.create({
    data: {
      title: task.title,
      description: task.description,
    },
  });
};

export const getPendingTasks = async () => {
  return await client.task.findMany({
    where: {
      completed: false,
    },
  });
};

export const getTaskById = async (id: string) => {
  return await client.task.findFirst({
    where: { id },
  });
};

export const updateTaskById = async (id: string, task: Task) => {
  return await client.task.update({
    where: { id },
    data: {
      title: task.title,
      description: task.description,
      completed: task.completed,
    },
  });
};

export const deleteById = async (id: string) => {
  return await client.task.delete({
    where: { id },
  });
};
