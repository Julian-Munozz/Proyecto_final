import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  benefit: { type: String, required: true },
  theory: {
    cue: { type: String, required: true },
    craving: { type: String, required: true },
    response: { type: String, required: true },
    reward: { type: String, required: true },
  },
  science: { type: String, required: true },
   },
{
  timestamps: true // añade createdAt y updatedAt automáticamente
});

export const habitModel = mongoose.model("Habit", habitSchema);