import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.BD_URL, {
      dbName: "habits"
    });
    console.log("Base de datos conectada");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

