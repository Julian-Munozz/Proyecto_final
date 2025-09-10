import express from "express";
import { createUser, getUsers, updateUsers, deleteUsers  } from "../Controlles/users.controllers.js";

export const userRouter = express.Router();

//ruta para el POST
userRouter.post("/", createUser);

//ruta para el GET
userRouter.get("/", getUsers);

//ruta para el PUT
userRouter.put("/:id", updateUsers);

//ruta para el DELETE
userRouter.delete("/:id", deleteUsers);