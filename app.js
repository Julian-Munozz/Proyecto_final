// Configuración del servidor y gestionar la lógica de negocios
// npm run start
// Primero se importan las dependencias
// Configurar las dependencias 
// npm start (ejecuta todo) node nombreDelArchivo.js ejecuta solo el archivo seleccionado
// npm run dev (ejecuta nodemon)
// ctrl + c en la terminal para parar nodemon
// get, post, put, delete

import express from "express"; 
import dotenv from "dotenv";
import { connectionDB } from "./Src/Config/db.js"; 
import { userRouter } from "./Src/Routes/users.routes.js";
import { habitRouter } from "./Src/Routes/habits.routes.js";
import { loginRouter } from "./Src/Routes/login.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();
const port = process.env.PORT;
connectionDB();
const _filename = fileURLToPath(import.meta.url); 
const _dirname = path.dirname(_filename);

app.get('/', (req, res) => {
  res.send('¡Server works');
});

app.use(cors());
app.use(express.json());
app.use("/posts", habitRouter);
app.use("/users", userRouter);
app.use("/uploads", express.static(path.join(_dirname, "uploads")));
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});


