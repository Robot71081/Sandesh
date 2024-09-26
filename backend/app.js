import  express  from "express";
import userRoute from './routes/user.js'
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv"

dotenv.config({
    path:"./.env",
})

const mongoURI=process.env.MONGO_URI
const port =process.env.PORT || 3000

const app=express();

//using middleware here

app.use(express.json())


connectDB(mongoURI)
app.use("/user",userRoute)

app.get("/",(req,res)=>{
    res.send("hello how are you")
})



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})