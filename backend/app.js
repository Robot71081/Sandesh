import  express  from "express";

import { connectDB } from "./utils/features.js";
import dotenv from "dotenv"
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from 'cookie-parser'

import userRoute from './routes/user.js'
import chatRoute from './routes/chat.js'
import { createUser } from "./seeders/user.js";


dotenv.config({
    path:"./.env",
})

const mongoURI=process.env.MONGO_URI
const port =process.env.PORT || 3000

const app=express();

//using middleware here

app.use(express.json())
app.use(cookieParser())


connectDB(mongoURI)

app.use("/user",userRoute)
app.use("/chat",chatRoute)

app.get("/",(req,res)=>{
    res.send("hello how are you")
})

app.use(errorMiddleware)



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})