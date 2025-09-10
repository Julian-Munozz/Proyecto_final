import { userModel } from "../Models/Users.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {

     try {
        // destructuración: cuando necesito procesar la info del usuario antes de guardarla
        const { fullName, userName, email, password, role, img, bio, interests } = req.body;
        const encrypedPassword = await bcrypt.hash(password, 10);

        await userModel.create({
            fullName,
            userName,
            email,
            password: encrypedPassword,
            role,
            img,
            bio,
            interests
        });
        return res.status(201).json({"mensaje": "Usuario creado"});
    } catch (error) {
        return res.status(400).json({ "mensaje": "Error al crear el usuario", "Error": error.message || error });
    }
};

export const getUsers = async (req, res) => {

 try {
        const allUsers = await userModel.find();
        return res.status(200).json({"mensaje": "Se encontraron los siguientes usuarios", "data": allUsers});
    } catch (error) {
        return res.status(500).json({ "mensaje": "Error al obtener los usuarios", "Error": error.message || error });
    }
          
};

//3. Método para ACTUALIZAR TODOS los usuarios -> PUT

export const updateUsers = async (req, res) => {

     try {
        const idForUpdate = req.params._id;
        const dataForUpdate = req.body;
        await userModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return res.status(200).json({"mensaje": "Usuario actualizado"});
    } catch (error) {
        return res.status(400).json({ "mensaje": "Error al actualizar el usuario", "Error": error.message || error });
    }
};

//4. Método para BORRAR TODOS los usuarios -> DELETE

export const deleteUsers = async (req, res) => {

     try {
        const idForDelete = req.params._id;
        await userModel.findByIdAndDelete(idForDelete);
        return res.status(200).json({"mensaje": "Usuario eliminado"}); 
    } catch (error) {
        return res.status(400).json({ "mensaje": "Error al eliminar el usuario", "Error": error.message || error });
    }
};
