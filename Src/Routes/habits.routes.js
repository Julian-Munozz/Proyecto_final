import express from "express";
import { createPost, getHabits, updateHabits, deleteHabits } from "../Controlles/habits.controllers.js";

export const habitRouter = express.Router();

//ruta para el POST
habitRouter.post("/", createPost);

//ruta para el GET
habitRouter.get("/", getHabits);

//ruta para el PUT
habitRouter.put("/:id", updateHabits);

//ruta para el DELETE
habitRouter.delete("/:id", deleteHabits);
