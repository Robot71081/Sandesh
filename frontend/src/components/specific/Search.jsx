import React, { useState } from 'react'
import {useInputValidation} from '6pp'
import UserItem from '../shared/UserItem'
import { sampleusers } from '../constants/sampleData'


const Search = () => {
  const search= useInputValidation("")
  const addFriendHandler=(id)=>{
     console.log(id)
  }
  const isLoadingSendFriendRequest=false
  const [users,setUsers]=useState(sampleusers)

  
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 overflow-hidden">
      <h2 className="text-xl font-semibold mb-4 text-center">Find People</h2>
  
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          id="textfield"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          placeholder="Enter text here"
          value={search.value}
          onChange={search.changeHandler}
        />
      </div>
  
      <ul className="bg-white border border-gray-300 rounded-md shadow-md divide-y divide-gray-200 mt-4 overflow-hidden max-h-60 overflow-y-auto">
        {users.map((i) => (
          <UserItem user={i} key={i._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest} />
        ))}
      </ul>
    </div>
  </div>
  

  )
}

export default Search
