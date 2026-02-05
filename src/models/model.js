import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: String,
    completed: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
