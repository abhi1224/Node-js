import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true
    },
    age: {
        type: Number,
        min: [1, "Age must be at least 1"],
        max: [120, "Age must be less than 120"],
        required: [true, "Age is required"]
    },
    city: {
        type: String,
        required: [true, "City is required"],
        trim: true,
        minlength: [3, "City must be at least 3 characters"]
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
