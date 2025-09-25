import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url"; 

// Desarollo de las configuraciones y funcionalidades de multer o sea, se le da la ruta especifica de la carpeta que va a guardar los archivos que se suban mediante la pag web

const _filename = fileURLToPath(import.meta.url); // _filename es la ruta completa del archivo actual

const _dirname = path.dirname(_filename); // _dirname es la ruta del directorio actual

// 1. Crear la carpetra donde se van a guardar los archivos

const UPLOADS_FOLDER = path.join(_dirname, "../uploads");

if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER);
}

// 2. Especificar como se van a guardar los archivos 

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext).replace(/\s+/g, "-");
    cb(null, `${base}-${Date.now()}${ext}`);
  }
});

// 3. Que tipo de archivos se van a recibir

const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Tipo de archivo no permitido"), false);
  }
};

// 4. definir el limite del tamaño de los archivos

const limits = {
  fileSize: 5 * 1024 * 1024 // 5 MB
};

export const upload = multer({ storage, fileFilter, limits });
