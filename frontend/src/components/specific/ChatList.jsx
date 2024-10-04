import React from 'react'
import ChatItem from '../shared/ChatItem'

const ChatList = ({chats=[],chatid,onlineusers=[],newMessagesAlert=[{chatid:"",count:0}],handleDeleteChat}) => {
    return (
      <div className='w-full flex flex-col overflow-y-auto max-h-screen '>
        {
          chats?.map((data,index)=>{
            const {avatar,_id,name,groupChat,members}=data
            const newMessageAlert=newMessagesAlert.find(
                ({chatid})=>chatid===_id
            )
            const isOnline=members?.some((member)=>onlineusers.includes(_id))
              return <ChatItem index={index} newMessageAlert={newMessageAlert} isOnline={isOnline} avatar={avatar} name={name} _id={_id} key={_id} groupChat={groupChat} sameSender={chatid===_id} handleDeleteChat={handleDeleteChat}/>
          })
        }
      </div>
    )
  }

export default ChatList
