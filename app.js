import express from "express";
import mongoose from "mongoose";
import UserRouter from "./router/UserRouter.js";


const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/User", UserRouter);

mongoose.connect('mongodb+srv://surajitkarmakar12:rgB5NPTsDgvUfLwa@cluster0.odg6ose.mongodb.net/').then(()=>{
    console.log("mongodb is connect")
    app.listen(port,()=>{
        console.log("server is running")
    })
}).catch((err)=>{
    console.error("mongodb is not connected",err);
})