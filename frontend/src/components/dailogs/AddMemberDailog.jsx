import React,{useState} from 'react'
import {sampleusers} from '../constants/sampleData'
import UserItem from '../shared/UserItem'

const AddMemberDailog = ({addMember,isLoadingAddMember,chatId}) => {
    const [members,setMembers]=useState(sampleusers)
    const [selectedMembers,setSelectedMembers]=useState([])
    const selectMemberHandler =(id)=>{
       setSelectedMembers(prev=>(prev.includes(id)?prev.filter((i)=>i!==id):[...prev,id]))
    }
   
    const addmemberSubmithandler=()=>{
     closeHandler()
    }
    const closeHandler=()=>{
      setSelectedMembers([])
      setMembers([])
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-center">Add Member</h2>
        <button onClick={closeHandler} className="text-gray-600 hover:text-gray-900">
          &times; 
        </button>
      </div>
      
      <div className="space-y-4 mb-4">
        {members.length > 0 ? (
          members.map((i) => (
            <UserItem 
              key={i.id} 
              user={i} 
              handler={selectMemberHandler} 
              isAdded={selectedMembers.includes(i._id)} 
            />
          ))
        ) : (
          <h1 className="text-center text-gray-500">No friends</h1>
        )}
      </div>
  
      <div className="flex justify-end space-x-4">
        <button 
          className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition"
          onClick={closeHandler}
        >
          Cancel
        </button>
        <button 
          className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition"
          onClick={addmemberSubmithandler}
          disabled={isLoadingAddMember}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default AddMemberDailog
