import React, { useState } from 'react'
import { sampleusers } from '../constants/sampleData'
import UserItem from '../shared/UserItem'
import {useInputValidation} from '6pp'

const NewGroup = () => {
  const [members,setMembers]=useState(sampleusers)
  const [selectedMembers,setSelectedMembers]=useState([])
  const selectMemberHandler =(id)=>{
     setSelectedMembers(prev=>(prev.includes(id)?prev.filter((i)=>i!==id):[...prev,id]))
  }
  console.log(selectedMembers)
  const submitHandler =()=>{

  }
  const closedHandler=()=>{
    
  }
  const groupName=useInputValidation("")
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 flex flex-col items-center">
      <h2 className="overflow-hidden text-xl font-semibold mb-4 text-center text-black">New Group</h2>
      
      <input
        type="text"
       
        id="textfield"
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
        placeholder="Group Name"
        value={groupName.value}
        onChange={groupName.changeHandler}
      />
      
      <span className=" mb-2">Members</span>
      
      <div className="flex flex-col w-full mb-4">
        {members.map((i) => (
          <UserItem user={i} key={i._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)}/>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row w-full ">
        <button className="bg-red-700 text-white rounded-md w-full sm:w-auto mb-2 sm:mb-0">Cancel</button>
        <button className="bg-green-500 text-white rounded-md w-full sm:w-auto" onClick={submitHandler}>Create</button>
      </div>
    </div>
  </div>
  
  
  )
}

export default NewGroup
