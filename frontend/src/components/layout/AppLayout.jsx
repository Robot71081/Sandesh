import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import ChatList from '../specific/ChatList'
import { sampleChats } from '../constants/sampleData'
import { useParams } from 'react-router-dom'


const AppLayout = () =>WrappedComponent=> {
  return (props)=>{
    const params=useParams()
    const chatid=params.chatid
    const handleDeleteChat=(e,_id,groupChat)=>{
          e.preventDefault()
          console.log("delete chat",_id)

    }
     return(
        <>
         <Title />
           <Header/>
           <div className="h-full container mx-auto ">
  <div className="flex flex-col sm:flex-row ">
    <div className=" hidden sm:block w-full sm:w-1/2 lg:w-1/2 h-full bg-gray-300">
      <ChatList chats={sampleChats} chatid={chatid} handleDeleteChat={handleDeleteChat} onlineusers={["1","2"]}/>
    </div>
    <div className="w-full sm:w-1/2 lg:w-1/2 h-full bg-black">
    <WrappedComponent {...props}/>
    </div>
    <div className="  hidden sm:block w-full sm:w-1/2 lg:w-1/2 h-full bg-red-500">
     Third
    </div>
  </div>
</div>
           
           
        </>
     )
        
     
  }
    
  
}

export default AppLayout
