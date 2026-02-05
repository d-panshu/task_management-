import { TaskModel } from "../models/model.js";

export const getTasks = (req, res) => {
  const tasks = TaskModel.getAll();
  res.status(200).json(tasks);
};

export const createTask = (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = TaskModel.create(req.body);
  res.status(201).json(task);
};
