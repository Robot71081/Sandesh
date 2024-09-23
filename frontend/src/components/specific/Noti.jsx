import React, { memo } from 'react'
import { sampleNoti } from '../constants/sampleData'

const Noti = () => {
  const friendRequestHandler=({_id,accept})=>{

  }
  return (
    
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <div className='flex flex-col p-[1rem]'>
        <h2 className="text-xl font-semibold mb-4 text-center overflow-hidden">Notifications</h2>
        {
          sampleNoti.length>0?sampleNoti.map((i)=><NotiItem sender={i.sender} _id={i._id} handler={friendRequestHandler} key={i._id}/>):<span className='text-center'>No Notifications</span>
        }
        </div>
       
      </div>
    </div>
    
  )
}

const NotiItem=memo(({sender,_id,handler})=>{
  const {name,avatar}=sender
  return (
    <ul className="bg-white border border-gray-300 rounded-md shadow-md divide-y divide-gray-200">
    <li className="flex items-center justify-between hover:bg-gray-100 p-3">
      <div className="flex flex-col sm:flex-row items-center w-full">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User Avatar" 
          className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover mr-3"
        />
        <span className="overflow-hidden text-center text-ellipsis w-full">{`${name} sent you a friend request`}</span>
        <div className="mt-2 sm:mt-0 flex space-x-2 sm:ml-4">
          <button className="bg-green-600 text-white rounded-lg px-3 py-1" onClick={() => handler({_id, accept: true})}>Accept</button>
          <button className="bg-red-600 text-white rounded-lg px-3 py-1" onClick={() => handler({_id, accept: false})}>Reject</button>
        </div>
      </div>
    </li>
  </ul>
  
  )
})

export default Noti
