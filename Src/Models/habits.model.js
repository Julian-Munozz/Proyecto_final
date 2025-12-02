import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: false},
  img: { type: String, required: true },
  tittle: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  benefit: { type: String, required: true },
  });

export const habitModel = mongoose.model("Habit", habitSchema);
