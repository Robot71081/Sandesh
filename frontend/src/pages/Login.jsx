import React,{useState} from 'react'
import {useInputValidation} from '6pp'



const Login = () => {
    const [isLogin,setLogin]=useState(true)
    const toggleLogin=()=>{setLogin((prev)=>!prev)}
    const  name=useInputValidation("")
    const  bio=useInputValidation("")
    const  username=useInputValidation("")
    const  password=useInputValidation("")
  return (
    <>
    <div>
    {isLogin?(
    <>
      <form action="">
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

      <div className="max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-semibold text-center">Login</h1>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative">
              <input  value={username.value} onChange={username.changeHandler}autocomplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
              <label for="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
            </div>
            <div className="relative">
              <input  value={password.value} onChange={password.changeHandler} autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required/>
              <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>
            <div className="relative ">
              <button type="submit"className="bg-cyan-500 text-white rounded-md px-2 py-1 ">Submit</button>
            </div>

            <div className='text-center font-semibold '>OR</div>
            <div className="relative   ">
              <button type="submit"className="bg-cyan-500 text-white rounded-md px-2 py-1  " onClick={toggleLogin}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

     

    </div>
  </div>
</div>
      </form>
    </>
    ):
    (
        <>
        <form action="">
       
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
  
        <div className="max-w-md mx-auto">
          <div>
          <div className="flex flex-col space-y-4 items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-400">
      <img src={""} alt="" className="w-full h-full object-cover" />
    </div>
    
   
      
    </div>
            <h1 className="text-2xl font-semibold text-center">Sign-up</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="relative">
                <input autocomplete="off" id="dp" name="dp" type="file" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" required />
                <label for="dp" className="absolute left-0 -top-7 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-4 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Image</label>
              </div>
            <div className="relative">
                <input  value={name.value} onChange={name.changeHandler}autocomplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                <label for="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
              </div>
              <div className="relative">
                <input value={bio.value} onChange={bio.changeHandler} autocomplete="off" id="bio" name="bio" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                <label for="bio" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Bio</label>
              </div>
              <div className="relative">
                <input  value={username.value} onChange={username.changeHandler} autocomplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                <label for="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
              </div>
              <div className="relative">
                <input value={password.value} onChange={password.changeHandler}autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required/>
                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
              <div className="relative ">
                <button type="submit"className="bg-cyan-500 text-white rounded-md px-2 py-1 ">Submit</button>
              </div>
  
              <div className='text-center font-semibold '>OR</div>
              <div className="relative   ">
                <button type="submit"className="bg-cyan-500 text-white rounded-md px-2 py-1  " onClick={toggleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
  
       
  
      </div>
    </div>
  </div>
        </form>
      </>
    )

    } 
    </div>
    </>
  )
}

export default Login
