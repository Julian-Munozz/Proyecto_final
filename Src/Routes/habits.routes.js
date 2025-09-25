import express from "express";
import { createPost, getHabits, getHabitsByUserName, deleteHabitsById, updateHabitsById } from "../Controlles/habits.controllers.js";
import { auth } from "../Middelware/auth.js";
export const habitRouter = express.Router();

//ruta para el POST
habitRouter.post("/", auth ("user"), createPost);

//ruta para el GET
habitRouter.get("/", auth ("admin"), getHabits);

habitRouter.get("/:userName", auth ("user"), getHabitsByUserName);

//ruta para el PUT
habitRouter.put("/:_id", auth ("user"), updateHabitsById);

//ruta para el DELETE
habitRouter.delete("/:_id", auth ("user"), deleteHabitsById);
