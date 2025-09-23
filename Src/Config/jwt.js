import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();
const key = process.env.SECRET_KEY;

// metodo para generar el token

export const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jsonwebtoken.sign( payload, key, { expiresIn: "1h" }, (error, token) => {
      if (error) {
        reject(new Error("Hubo un error al generar el token: ", error.message));
      } else {
        resolve(token);
      }
    });
  });
}

// metodo para verificar el token

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jsonwebtoken.verify(token, key, (error, decoded) => {
      if (error) {
        reject(new Error("Token inválido: ", error.message));
      } else {
        resolve(decoded);
      }
    });
  });
}