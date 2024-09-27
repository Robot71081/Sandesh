import { compare } from "bcrypt";
import {User} from "../models/user.js"
import { sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { Errorhandler } from "../utils/utility.js";
import { cookieOptions } from "../utils/features.js";


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

   sendToken(res,user,201,"User Created")
}
 
//login user and save token in cookie
const login =TryCatch (async (req,res,next)=>{
    const {username,password}=req.body
    const user =await User.findOne({username}).select("+password")
    if(!user) return next(new Errorhandler("Invalid Credentails",404))
    
    const isMatch =await compare(password,user.password)

    if(!isMatch) return next(new Errorhandler("Invalid Credentails",404))


    sendToken(res,user,200,`Welcome back ${user.name}`)
})

const getMyProfile= TryCatch(async(req,res)=>{

   const user= await User.findById(req.user)

   res.status(200).json({
    success:true,
    user
   })
})



const logout= TryCatch(async(req,res)=>{

  
     return res.status(200).cookie("sandesh-token","",{...cookieOptions,maxAge:0}).json({
     success:true,
     message:"Logged Out Successfully"
    })
 })

 const searchUser= TryCatch(async(req,res)=>{

  const {name}=req.query
  return res.status(200).json({
    success:true,
    message:name
   })

   
  
})

export {login,newUser,getMyProfile,logout,searchUser}