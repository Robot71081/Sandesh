import React, { useEffect } from 'react'
import Header from './Header'
import Title from '../shared/Title'
import ChatList from '../specific/ChatList'
import { sampleChats } from '../constants/sampleData'
import { useParams } from 'react-router-dom'
import Profile from '../specific/Profile'
import { useMyChatsQuery } from '../../redux/api/api'
import { useDispatch, useSelector } from 'react-redux'
import { setIsMobileMenuFriend } from '../../redux/reducers/misc'
import { useErrors } from '../../hooks/hooks'



const AppLayout = () =>WrappedComponent=> {
  return (props)=>{

    

 
    const params=useParams()
    const chatid=params.chatid
   const dispatch=useDispatch()
    const {isMobileMenuFriend}= useSelector((state)=>state.misc)

    const {isLoading,isError,data,error,refetch}= useMyChatsQuery("")

    useErrors([{isError,error}])
   
    const handleDeleteChat=(e,_id,groupChat)=>{
          e.preventDefault()
          console.log("delete chat",_id)

    }

    const handleMobileClose=()=>dispatch(setIsMobileMenuFriend(false))
     return(
        <>
         <Title />
           <Header/>
           {
           isLoading ? (<div className='fixed inset-0 bg-black bg-opacity-50 z-40'></div>) :(
      
            <div className='md:hidden'>
           
      
            <div 
              className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity 
                          ${isMobileMenuFriend ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onClick={handleMobileClose}
            />
      
            <div 
              className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform 
                          transform ${isMobileMenuFriend ? 'translate-x-0' : '-translate-x-full'}`}
            >
              <div className="p-4">
                
                <ChatList chats={data?.chats} chatid={chatid} handleDeleteChat={handleDeleteChat} onlineusers={["1", "2"]} />
               
              </div>
            </div>
          </div>
        


           )
           }
           <div className="h-full container mx-auto ">
  <div className="flex flex-col sm:flex-row ">
 {
  isLoading ? (<div className='fixed inset-0 bg-black bg-opacity-50 z-40'></div>) :(
    <div className="hidden sm:block w-full sm:w-1/3 lg:w-1/4 h-screen bg-white">
    <ChatList chats={data?.chats} chatid={chatid} handleDeleteChat={handleDeleteChat} onlineusers={["1", "2"]} />
  </div>
  )
 }
<div className="w-full sm:w-2/3 lg:w-3/4 h-screen bg-white">
  <WrappedComponent {...props} />
</div>
<div className="hidden sm:block w-full sm:w-1/3 lg:w-1/4 h-screen bg-black">
  <Profile />
</div>

  </div>
</div>
           
           
        </>
     )
        
     
  }
    
  
}

export default AppLayout
