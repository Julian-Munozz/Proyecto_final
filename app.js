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
 

const app = express();
dotenv.config();
const port = process.env.PORT;

connectionDB();

app.get('/', (req, res) => {
  res.send('¡Server works');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});


