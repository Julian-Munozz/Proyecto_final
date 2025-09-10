import mongoose from "mongoose";

// Se crea la pantilla de los elementos que van a estar en la base de datos
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ["admin", "user"], required: true },
    img: { type: String, required: false },
    bio: { type: String, required: false },
    interests: [{ type: String, enum: ["xxx", "vvv"], required: false }]
});

export const userModel = mongoose.model("User", userSchema);

