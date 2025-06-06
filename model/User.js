import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

  password: {
    type : String,
    required: true,
    unique : true,
  },

  
  createdAt: {
    type: Date,
    default: Date.now
  }

});


userSchema.pre('save', async (next)=>{
  const saltround = 10;
  this.password = await bcrypt.hash(this.password, saltround);
  next()
});


const user = mongoose.model("user", userSchema)

export default user;