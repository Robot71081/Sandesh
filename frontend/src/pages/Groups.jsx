import React, { useState,memo } from 'react'
import { MdKeyboardBackspace,MdOutlineMenu } from "react-icons/md";
import {Link, useNavigate,useSearchParams} from 'react-router-dom'
import AvatarCard from '../components/shared/AvatarCard'
import { sampleChats } from '../components/constants/sampleData';
import { FaPencilAlt } from "react-icons/fa";

const Groups = () => {
  const chatId=useSearchParams()[0].get("group")

  const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
  const [isEdit,setIsEdit]=useState(false)
  const navigate=useNavigate()
  const navBack=()=>{
      navigate("/")
  }

  const handleMobile=()=>{
    setIsMobileMenuOpen(prev=>!prev)
}

const handleMobileClose=()=>{
  setIsMobileMenuOpen(false)
}

const GroupName = (
  <div className="flex p-2 items-start">
    {isEdit ? (
      <></>
    ) : (
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-semibold">GroupName</h1>
        <button onClick={() => setIsEdit(true)} className="text-blue-500">
          <FaPencilAlt />
        </button>
      </div>
    )}
  </div>
);


  const IconBtns =<>
 
  <div className='container'> 
  <button className='fixed top-4 right-8 bg-black hover:bg-gray-800 text-white text-2xl rounded-2xl flex sm:hidden ' onClick={handleMobile}>
<MdOutlineMenu/>
  </button>
   <button className='absolute top-8 bg-black text-white text-2xl rounded-2xl hover:bg-gray-800' onClick={navBack}>
<MdKeyboardBackspace/>
   </button>

   
  
  </div>


  </>
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-4 h-screen ">
    <div className="bg-blue-300   h-full p-4 hidden sm:flex">
    <GroupsList myGroups={sampleChats} chatId={chatId}/>
    </div>

    <div className="   flex  h-full w-full p-4 ">
        {IconBtns}
        {
          GroupName
        }
    </div>
    <div>
    {isMobileMenuOpen && (
        <div
            className="fixed inset-0 bg-black opacity-50 sm:hidden"
            onClick={handleMobileClose}
        />
    )}
    <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 sm:hidden`} 
    >
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">
                <GroupsList myGroups={sampleChats} chatId={chatId} />
            </h2>
        </div>
    </div>
</div>



</div>


  )
}


const GroupsList=({myGroups=[],chatId})=>{
  return (
  <div className='container '>
  {
  myGroups.length>0?(myGroups.map((group)=><GroupListItem group={group} chatId={chatId} key={group._id}/>)):(<h1 className='text-center p-4'>No Groups</h1>)
  }
  </div>
  )
}

const GroupListItem=memo(({group,chatId})=>{
   const {name,_id,avatar }=group
   return( <Link to={`?group=${_id}`} onClick={(e)=>{if(chatId===_id) e.preventDefault()}}>
    <div className=' flex flex-row space-x-4 items-center hover:bg-gray-400'>
      <AvatarCard avatar={avatar}/>
      <h1>{name}</h1>
    </div>
    </Link>
   )
})
export default Groups
