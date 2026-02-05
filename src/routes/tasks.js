import express from "express";
import { getTasks, createTask } from "../controllers/controller.js";
import { protect } from "../middlewares/middleware.js";

const router = express.Router();

router.get("/", protect, getTasks);
router.post("/", protect, createTask);

export default router;
