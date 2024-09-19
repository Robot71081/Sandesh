import React,{lazy} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'



const Home=lazy(()=>import("./pages/home.jsx"))
const Login=lazy(()=>import("./pages/Login.jsx"))
const Chat=lazy(()=>import("./pages/Chat.jsx"))
const Groups=lazy(()=>import("./pages/Groups.jsx"))


const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/chat/:chatid' element={<Chat/>}/>
      <Route path='/groups' element={<Groups/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App

