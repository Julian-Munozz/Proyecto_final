import mongoose from "mongoose";

// Se crea la pantilla de los elementos que van a estar en la base de datos
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], required: true },
    img: { type: String, required: false },
    bio: { type: String, required: false },
    interests: [{ type: String, enum: ["xxx", ""], required: false }]
});

export const userModel = mongoose.model("User", userSchema);

