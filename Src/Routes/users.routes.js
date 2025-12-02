import express from "express";
import {
  createUser, getUsers, getUserById, updatePassword,
  updateProfile, deleteOwnAccount
} from "../Controlles/users.controllers.js";

import { upload } from "../Config/multer.js";
import { auth } from "../Middelware/auth.js";

export const userRouter = express.Router();

userRouter.post("/", upload.single("img"), createUser);

// Obtener todos los usuarios (solo admin)
userRouter.get("/", auth("admin"), getUsers);

// Obtener un usuario por ID (admin puede consultar info de cualquier usuario)
userRouter.get("/:_id", getUserById);

// Actualizar contraseña del propio usuario (el id debe ser el suyo mismo)
userRouter.put("/password/:_id", updatePassword);

// Actualizar perfil del propio usuario (bio, intereses, imagen)
userRouter.put("/profile/:_id", upload.single("img"), updateProfile);

// Eliminar cuenta propia
userRouter.delete("/me/:_id", deleteOwnAccount);
