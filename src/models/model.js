import fs from "fs";
import path from "path";

const DATA_FILE = path.resolve("data.json");

export const TaskModel = {
  getAll() {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  },

  create(task) {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    const tasks = JSON.parse(data);

    const newTask = {
      id: Date.now(),
      title: task.title,
      completed: false
    };

    tasks.push(newTask);

    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
    return newTask;
  }
};
