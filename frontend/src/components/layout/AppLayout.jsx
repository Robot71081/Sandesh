import React from 'react'
import Header from './Header'
import Title from '../shared/Title'

const AppLayout = () =>WrappedComponent=> {
  return (props)=>{
     return(
        <>
         <Title />
           <Header/>
           <div class="h-full container mx-auto ">
  <div class="flex flex-col sm:flex-row ">
    <div class="w-full sm:w-1/2 lg:w-1/2 h-full bg-green-900">
      First
    </div>
    <div class="w-full sm:w-1/2 lg:w-1/2 h-full bg-black">
    <WrappedComponent {...props}/>
    </div>
    <div class="w-full sm:w-1/2 lg:w-1/2 h-full bg-red-500">
     Third
    </div>
  </div>
</div>
           
           
        </>
     )
        
     
  }
    
  
}

export default AppLayout
