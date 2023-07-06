import mongoose, { models, model } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    }
})

const user = models.Users || model("Users", userSchema);

export default user;