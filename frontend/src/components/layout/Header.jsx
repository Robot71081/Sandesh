import React, { useState } from 'react'
import { FaSearch  } from "react-icons/fa"; 
import { FaUserGroup } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import  Search  from '../specific/Search';
import {useNavigate} from 'react-router-dom';


const Header = () => {

    const navigate=useNavigate();
    const [isSearch,setisSearch]=useState(false)
    const [isNewGroup,setisNewGroup]=useState(false)
    const [isLogout,setisLogout]=useState(false)
    const [isNoti,setisNoti]=useState(false)
    const handleSearch=()=>{
       setisSearch(prev=>!prev)
    }
    const openGroup=()=>{
       setisNewGroup(prev=>!prev)
    }
    const navGroup=()=>navigate("/groups")

    const openNoti=()=>{
        setisNoti(prev=>!prev)
     }



    const logoutHandler=()=>{
       setisLogout(prev=>!prev)
    }

    
  return (
    <>
    <div className='flex flex-row bg-blue-400 h-11 font-bold text-white text-4xl container mx-auto'>
      <div className= ' '>Sandesh
       
      
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div className='flex flex-row'>
      <button className="mx-3 "onClick={handleSearch}><FaSearch /></button>
      <button className="mx-3" onClick={openGroup}><IoAddSharp /></button>
      <button className="mx-3" onClick={navGroup}><FaUserGroup /></button>
      <button className="mx-3" onClick={openNoti}><IoIosNotifications /></button>
      <button className="mx-3" onClick={logoutHandler}><RiLogoutBoxRFill /></button>
      </div>
      </div>
      
       {isSearch&& <Search/>}
        
      
     
    </>
  )
}

export default Header
