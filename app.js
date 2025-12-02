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
const port = process.env.PORT || 3000;
connectionDB();
const _filename = fileURLToPath(import.meta.url); 
const _dirname = path.dirname(_filename);



app.use(cors());
const corsOptions = {
  origin: `http://localhost:${process.env.PORT_FRONTEND}`, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/posts", habitRouter);
app.use("/users", userRouter);
app.use("/uploads", express.static(path.join(_dirname, "uploads")));
app.use("/login", loginRouter);
app.use(express.static(path.join(_dirname, "dist", "frontend", "browser", "index.html")));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(_dirname, "dist", "frontend", "browser", "index.html"));
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});


