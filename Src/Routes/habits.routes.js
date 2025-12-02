import express from "express";
import { createPost, getHabits, getHabitsByUserName, deleteHabitsById, updateHabitsById } from "../Controlles/habits.controllers.js";
import { auth } from "../Middelware/auth.js";
import { upload } from "../Config/multer.js";
export const habitRouter = express.Router();

//ruta para el POST
habitRouter.post("/", upload.single("img"), createPost);

//ruta para el GET
habitRouter.get("/", getHabits);

habitRouter.get("/:userName", getHabitsByUserName);

//ruta para el PUT
habitRouter.put("/:_id", updateHabitsById);

//ruta para el DELETE
habitRouter.delete("/:_id", deleteHabitsById);
