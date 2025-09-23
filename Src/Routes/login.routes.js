import express from "express";
import { login } from "../Services/login.js";
import { auth } from "../Middelware/auth.js";


export const loginRouter = express.Router();
loginRouter.post("/", login);