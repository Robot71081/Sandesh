import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { MdAttachFile,MdSend  } from "react-icons/md";
import FileMenu from '../components/dailogs/FileMenu';
import { sampleMsg } from '../components/constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const Chat = () => {
  const user={
    _id:"dfgdf",
    name:"mohit"
  }
  const containerRef=useRef(null)
  
  return (
    <>
    <div className="flex flex-col space-y-4 p-4 bg-gray-100 h-[90%] overflow-hidden overflow-auto" ref={containerRef}>
    {
      sampleMsg.map((i)=>(
        <MessageComponent key={i._id} message={i} user={user} />
      ))
    }
    </div>
   
    <form className='h-[10%]'>
  <div className="flex flex-row items-center space-x-2 p-4 h-full">
    <button   type="button" className="flex items-center justify-center relative bg-blue-500 rounded-lg p-[0.5rem] hover:bg-blue-800  text-white">
    
      <MdAttachFile />
    </button>

    <input
      type="text"
      placeholder="Enter message here"
      className='flex-grow h-full border-none outline-none p-2 rounded-3xl bg-gray-100'
    />

    <button type="button" className="flex items-center justify-center bg-blue-500 rounded-lg p-[0.5rem] hover:bg-blue-800  text-white">
      <MdSend  />
    </button>
  </div>
</form>
{/*<FileMenu />*/}

    </>
  )
}

export default AppLayout()(Chat)
