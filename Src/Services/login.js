import { userModel } from "../Models/Users.model.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../Config/jwt.js";

export const login = async (req, res) =>{

    try {
        console.log("Body recibido:", req.body);
        const { email, password } = req.body;
        const userFound = await userModel.findOne({ email: email });
       if (!userFound) {
        return res.status(404).json({ "mensaje": "Usuario no encontrado" });
       }
         const validPassword = await bcryptjs.compare(password, userFound.password);
       if (!validPassword) {
           return res.status(401).json({ "mensaje": "Contraseña incorrecta" });
       }
       const payload = {id: userFound._id, userName: userFound.userName, role: userFound.role};
       if (userFound.role === "admin") {
        payload.admin = true;
       }
       else {
        payload.admin = false;
       }
         const token = await generateToken(payload);
         return res.status(200).json({ "mensaje": "Login correcto", "token": token });
    } catch (error) {
        return res.status(400).json({ "mensaje": "Ocurrió un error en el inicio de sesión", "error": error.message });
    }
}