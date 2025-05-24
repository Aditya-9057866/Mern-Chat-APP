// const express = require("express")
import express, { urlencoded } from "express" 
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./route/user.route.js"
import cors from "cors"
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT || 5002
const URI=process.env.MONGODB_URI
try {
  mongoose.connect(URI);
    console.log("MongoDB Connected");
} catch (error)
 {
  console.log(error);
}


// middleware
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`)
})