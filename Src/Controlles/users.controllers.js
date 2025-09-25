import { userModel } from "../Models/Users.model.js";
import bcrypt from "bcryptjs";
/* Crear usuario */
export const createUser = async (req, res) => {
  try {
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

    return res.status(201).json({ "mensaje": "Usuario creado" });

  } catch (error) {
    return res.status(400).json({
      "mensaje": "Error al crear el usuario",
      "Error": error.message || error
    });
  }
};

/* Obtener todos los usuarios */
export const getUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    return res.status(200).json({
      "mensaje": "Se encontraron los siguientes usuarios",
      "data": allUsers
    });
  } catch (error) {
    return res.status(500).json({
      "mensaje": "Error al obtener los usuarios",
      "Error": error.message || error
    });
  }
};

/* Obtener un usuario por ID */
export const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params._id).select("-password");

    if (!user) {
      return res.status(404).json({ "mensaje": "Usuario no encontrado" });
    }

    return res.status(200).json({
      "mensaje": "Usuario encontrado",
      "data": user
    });

  } catch (error) {
    return res.status(400).json({
      "mensaje": "Error al obtener el usuario",
      "Error": error.message || error
    });
  }
};

/* Actualizar contraseña */
export const updatePassword = async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ "mensaje": "Debe proporcionar una nueva contraseña" });
    }

    const encrypedPassword = await bcrypt.hash(password, 10);

    await userModel.findByIdAndUpdate(req.params._id, { password: encrypedPassword });

    return res.status(200).json({ "mensaje": "Contraseña actualizada" });

  } catch (error) {
    return res.status(400).json({
      "mensaje": "Error al actualizar la contraseña",
      "Error": error.message || error
    });
  }
};

/* Actualizar perfil */
export const updateProfile = async (req, res) => {
  try {
    
    const { fullName, userName, bio, interests } = req.body;

    const updateFields = { fullName, userName, bio, interests };

    if (req.file) {
      updateFields.img = req.file.path;
    }

    await userModel.findByIdAndUpdate(req.params._id, updateFields);

    return res.status(200).json({ "mensaje": "Perfil actualizado" });

  } catch (error) {
    return res.status(400).json({
      "mensaje": "Error al actualizar el perfil",
      "Error": error.message || error
    });
  }
};

/* Eliminar cuenta propia */
export const deleteOwnAccount = async (req, res) => {
  try {
    const userId = req.params._id;
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ "mensaje": "Usuario no encontrado" });
    }

    return res.status(200).json({ "mensaje": "Cuenta eliminada correctamente" });

  } catch (error) {
    return res.status(400).json({
      "mensaje": "Error al eliminar la cuenta",
      "Error": error.message || error
    });
  }
};