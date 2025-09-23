import { verifyToken } from "../Config/jwt.js";
// Middleware para proteger rutas
export const auth = (reqRole) => {
    return async (req, res, next) => {
        const token = req.headers["authorization"];

    if (!token){
     return res.status(401).json({ "mensaje": "Token no proporcionado" });
    }
    const allowedToken = token.split(" ")[1]; // Extraer el token del formato "
    console.log("Cuál es el token extraído" + allowedToken)
    try {
        const decoded = await verifyToken(allowedToken);
        console.log("Información decodificada del token: ", decoded);
        if (reqRole === "admin" && decoded.admin === false) {
            return res.status(403).json({ "mensaje": "No tienes permisos para acceder a este recurso" });
        }
    } catch (error) {
         return res.status(401).json({ "mensaje": "Token no válido" + error.message })
    }
    next();
  };
};