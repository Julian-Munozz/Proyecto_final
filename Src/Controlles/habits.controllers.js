import { habitModel } from "../Models/habits.model.js";

export const createPost = async (req, res) => {

    try {
        await habitModel.create(req.body);
        return res.status(201).json({"mensaje": "Hábito creado"}); 
    } catch (error) {
        return res.status(400).json({ "mensaje": "Error al crear el hábito", "Error": error.message || error });
    }
};


//2. Método para MOSTRAR TODOS los hábitos -> GET

export const getHabits = async (req, res) => {

 try {
        const allHabits = await habitModel.find().populate ("user", "img userName");
        return res.status(200).json({"mensaje": "Se encontraron los siguientes hábitos", "data": allHabits});
    } catch (error) {
        return res.status(500).json({ "mensaje": "Error al obtener los hábitos", "Error": error.message || error });
    }
          
};

export const getHabitsByUserName = async (req, res) => {

 try {
        const { userName } = req.params;
        const allHabits = await habitModel.find({"user.userName": userName}).populate ("user", "img userName");
        return res.status(200).json({"mensaje": "Se encontraron los siguientes hábitos", "data": allHabits});
    } catch (error) {
        return res.status(500).json({ "mensaje": "Error al obtener los hábitos", "Error": error.message || error });
    }
          
};

//3. Método para ACTUALIZAR TODOS los hábitos -> PUT

export const updateHabits = async (req, res) => {

     try {
        const idForUpdate = req.params._id;
        const dataForUpdate = req.body;
        await habitModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return res.status(200).json({"mensaje": "Hábito actualizado"});
    } catch (error) {
        return res.status(400).json({ "mensaje": "Error al actualizar el hábito", "Error": error.message || error });
    }
};

//4. Método para BORRAR TODOS los hábitos -> DELETE

export const deleteHabits = async (req, res) => {

     try {
        const idForDelete = req.params._id;
        await habitModel.findByIdAndDelete(idForDelete);
        return res.status(200).json({"mensaje": "Hábito eliminado"}); 
    } catch (error) {
        return res.status(400).json({ "mensaje": "Error al eliminar el hábito", "Error": error.message || error });
    }
};

