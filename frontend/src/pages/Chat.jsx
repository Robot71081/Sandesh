import React, { useEffect, useRef, useState } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { MdAttachFile,MdSend  } from "react-icons/md";
import FileMenu from '../components/dailogs/FileMenu';
import { sampleMsg } from '../components/constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';
import { getSocket } from '../socket';
import { useChatDetailsQuery, useGetMessagesQuery } from '../redux/api/api';
import { NEW_MESSAGE } from '../components/constants/event';
import { useCallback } from 'react';
import { useErrors, useSocketEvents } from '../hooks/hooks';
import {useInfiniteScrollTop} from '6pp'
import { useDispatch, useSelector } from 'react-redux';
import { setIsFileMenu } from '../redux/reducers/misc';


const Chat = ({chatId,user}) => {


  const containerRef=useRef(null)
  const socket=getSocket()
  const dispatch=useDispatch()
  const [message,setMessage] =useState("")
  const [messages,setMessages] =useState([])
  const [page,setPage]=useState(1)
  const [fileMenuAnchor,setFileMenuAnchor]=useState(null)
 const chatDetails= useChatDetailsQuery({chatId,skip:!chatId})
 const oldMessagesChunk=useGetMessagesQuery({chatId,page})

 
 const {data:oldMessages,setData:setOldMessages} =useInfiniteScrollTop(containerRef,oldMessagesChunk.data?.totalPages,page,setPage,oldMessagesChunk.data?.messages)
  
  const errors=[{isError:chatDetails.isError,error:chatDetails.error},
    {isError:oldMessagesChunk.isError,error:oldMessagesChunk.error}
  
  ]
  
  const members=chatDetails?.data?.chat?.members
  const {isFileMenu}=useSelector((state)=>state.misc)

  const handleFileOpen =(e)=>{
    
      dispatch(setIsFileMenu(true))
      setFileMenuAnchor(e.currentTarget)
  }
  
  const submitHandler=(e)=>{
    e.preventDefault()
    if(!message.trim()) return
    
    socket.emit(NEW_MESSAGE,{chatId,members,message})
    setMessage("")

      
  }
  const newMsgHandler =useCallback((data)=>{
    
    setMessages(prev=>[...prev,data.message])
  },[])

  const eventHandler={[NEW_MESSAGE]:newMsgHandler}
  useSocketEvents(socket,eventHandler)
  useErrors(errors)

  const allMessages=[...oldMessages,...messages]
  
  
  
  
  return chatDetails.isLoading?(<div className='fixed inset-0 bg-black bg-opacity-50 z-40'></div>):(
    <>
    <div className="flex flex-col space-y-4 p-4 bg-gray-100 h-[90%] overflow-auto" ref={containerRef}>
   
    {
      allMessages.map((i)=>(
        <MessageComponent key={i._id} message={i} user={user} />
      ))
    }
    </div>
   
    <form className='h-[10%]' onSubmit={submitHandler}>
  <div className="flex flex-row items-center space-x-2 p-4 h-full">
    <button onClick={handleFileOpen}  type="submit" className="flex items-center justify-center relative bg-blue-500 rounded-lg p-[0.5rem] hover:bg-blue-800  text-white">
    
      <MdAttachFile />
    </button>

    <input
      type="text"
      placeholder="Enter message here"
      className='flex-grow h-full border-none outline-none p-2 rounded-3xl bg-gray-100'
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
    />

    <button type="submit" className="flex items-center justify-center bg-blue-500 rounded-lg p-[0.5rem] hover:bg-blue-800  text-white">
      <MdSend  />
    </button>
  </div>
</form>
{isFileMenu &&<FileMenu anchorEl={fileMenuAnchor} chatId={chatId} />}

    </>
  )
}

export default AppLayout()(Chat)
