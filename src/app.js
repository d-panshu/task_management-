import express from "express";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/tasks.js";
import authRoutes from "./routes/auth/routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

export default app;
