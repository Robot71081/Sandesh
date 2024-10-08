import { compare } from "bcrypt";
import {User} from "../models/user.js"
import {Chat} from "../models/chat.js"
import {Request} from "../models/request.js"
import { emitEvent, sendToken, uploadFilesToCloudinary } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { Errorhandler } from "../utils/utility.js";
import { cookieOptions } from "../utils/features.js";
import { NEW_REQUEST, REFETCH_CHATS } from "../constants/event.js";
import { getOtherMember } from "../lib/helper.js";


//create a new user and save in database and cookies
const newUser =TryCatch(async(req,res,next)=>{
   
    const {name,username,password,bio} =req.body;

    const file=req.file
    if(!file) return next(new Errorhandler("Please upload avatar"))

    const result= await uploadFilesToCloudinary([file])

   
    const avatar={
        public_id:result[0].public_id,
        url:result[0].url
    }

   const user= await User.create({
        name,
        bio,
        username,
        password,
        avatar

    })

   sendToken(res,user,201,"User Created")
})
 
//login user and save token in cookie
const login =TryCatch (async (req,res,next)=>{
    const {username,password}=req.body
    const user =await User.findOne({username}).select("+password")
    if(!user) return next(new Errorhandler("Invalid Credentails",404))
    
    const isMatch =await compare(password,user.password)

    if(!isMatch) return next(new Errorhandler("Invalid Credentails",404))


    sendToken(res,user,200,`Welcome back ${user.name}`)
})

const getMyProfile= TryCatch(async(req,res,next)=>{

   const user= await User.findById(req.user)
   if(!user) return next(new Errorhandler("User not found ",404))

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

  const myChats= await Chat.find({groupChat:false,members:req.user})
  const allUsersFromMyChats=myChats.map((chat)=>chat.members).flat()
  const allUsersExceptMeAndFriends=await User.find({
    _id:{$nin:allUsersFromMyChats},
    name:{$regex:name,$options:"i"}
  })

  const users=allUsersExceptMeAndFriends.map(({_id,name,avatar})=>({
    _id,
    name,
    avatar:avatar.url
  }))
  

  return res.status(200).json({
    success:true,
    users
   })

   
  
})

const sendRequest= TryCatch(async(req,res,next)=>{

    const {userId}=req.body
    const request=await Request.findOne({
   $or:[
    {sender:req.user,receiver:userId},
    {sender:userId,receiver:req.user}
   ]
    })

    if(request) return next(new Errorhandler("Request already sent",400))

    await Request.create({
        sender:req.user,
        receiver:userId
    })

    emitEvent(req,NEW_REQUEST,[userId])

  
    return res.status(200).json({
    success:true,
    message:"Friend request sent"
   })
})

const acceptRequest= TryCatch(async(req,res,next)=>{

    const {requestId,accept}=req.body
    const request=await Request.findById(requestId).populate("sender","name").populate("receiver","name")

    if(!request) return next(new Errorhandler("Request not found ",404))

    if(request.receiver._id.toString()!==req.user.toString()) return next(new Errorhandler("Unauthorized ",401))

    if(!accept){
        await request.deleteOne()
        return res.status(200).json({
            success:true,
            message:"Friend Request rejected"
           })
    }

    const members=[request.sender._id,request.receiver._id]

    await Promise.all([Chat.create({
        members,
        name: `${request.sender.name}-${request.receiver.name}`,
    }),request.deleteOne()])


emitEvent(req,REFETCH_CHATS,members)


  
    return res.status(200).json({
    success:true,
    message:"Friend request accepted",
    senderId:request.sender._id
   })
})

const getAllNotifcations= TryCatch(async(req,res,next)=>{

    const requests=await Request.find({receiver:req.user}).populate("sender","name avatar")

    const allRequests=requests.map(({_id,sender})=>({
            _id,sender:{
            name:sender.name,
            avatar:sender.avatar.url
            }
    }))

  
    return res.status(200).json({
    success:true,
     allRequests
   })
})

const getMyFriends= TryCatch(async(req,res)=>{


    const chatId=req.query.chatId

    const chats=await Chat.find({members:req.user,groupChat:false}).populate("members","name avatar")

    const friends=chats.map(({members})=>{
        const otherUser=getOtherMember(members,req.user)

        return {
            _id:otherUser._id,
            name:otherUser.name,
            avatar:otherUser.avatar.url
        }
    })

    if(chatId){

        const chat=await Chat.findById(chatId)

        const availableFriends=friends.filter(
            (friend)=>!chat.members.includes(friend._id)
        )

        return res.status(200).json({
            success:true,
           friends:availableFriends
           })
    }else{
        return res.status(200).json({
            success:true,
           friends
           })
    }

  
    
})

export {login,newUser,getMyProfile,logout,searchUser,sendRequest,acceptRequest,getAllNotifcations,getMyFriends}