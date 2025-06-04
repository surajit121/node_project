import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true
  },
   email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});


const user = mongoose.model("user", userSchema)

export default user;