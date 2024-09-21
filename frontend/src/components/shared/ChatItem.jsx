import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import AvatarCard from './AvatarCard'

const ChatItem = ({avatar=[],name,_id,groupChat=false,sameSender,isOnline,newMessageAlert,index=0,handleDeleteChat}) => {
  return (
   <Link to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)} className='text-black p-1 hover:bg-white'>
    <div style={{
        display:"flex",alignItems:"center",padding:"1rem",backgroundColor:sameSender?"black":"unset",color:sameSender?"white":"unset",gap:"1rem",position:"relative"}}>

        <AvatarCard avatar={avatar}/>
        <div>
            
                <span>{name}</span><br/>
                {newMessageAlert&&(
                    <span className='text-white'>{newMessageAlert.count}New Messages</span>
                )}
           
           {
            isOnline && (<div className='w-5 h-5 rounded-full bg-green-500 absolute top-5 right-1 '></div>)
        }
            </div>
       
    

    </div>
   </Link>
  )
}

export default memo(ChatItem)

