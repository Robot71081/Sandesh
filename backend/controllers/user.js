import {User} from "../models/user.js"
import { sendToken } from "../utils/features.js";
//create a new user and save in database and cookies
const newUser =async(req,res)=>{
   
    const {name,username,password} =req.body;

   
    const avatar={
        public_id:"erte",
        url:"dfgdf"
    }

   const user= await User.create({
        name,
        username,
        password,
        avatar

    })

   sendToken(res,user,201,"user Created")
}

const login =(req,res)=>{
    res.send("hello world")
}

export {login,newUser}