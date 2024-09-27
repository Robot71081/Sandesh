import jwt from "jsonwebtoken";
import { Errorhandler } from "../utils/utility.js";


const isAuth= (req,res,next)=>{
    const token =req.cookies["sandesh-token"]
   if(!token) return next(new Errorhandler("Please Login",401))

   const decodedData=jwt.verify(token,process.env.JWT_SECRET)
   req.user=decodedData._id
  next()
}

export {isAuth}