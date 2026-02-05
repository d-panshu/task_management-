import Task from "../models/model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    completed: false,
    user: req.user.id
  });

  res.status(201).json(task);
};
