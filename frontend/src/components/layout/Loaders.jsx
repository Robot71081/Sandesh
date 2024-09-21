import React from 'react'

export const LayoutLoader = () => {
  return (
    <div className="h-full  flex  container mx-auto ">
  <div className="flex flex-col flex-grow  sm:flex-row ">
    <div className=" hidden sm:block w-full sm:w-1/2 lg:w-1/2 h-full">
    <div className="h-full w-full flex-grow  bg-gray-600 animate-pulse rounded-md  text-white">Loading</div>
    </div>
    <div className=" w-full flex-grow sm:w-1/2 lg:w-1/2 h-full">
    <div className="h-full w-full bg-gray-600 animate-pulse rounded-md  text-white">Loading</div>
    </div>
    <div className="    hidden  flex-grow sm:block w-full sm:w-1/2 lg:w-1/2 h-full">
    <div className="h-full w-full flex-grow bg-gray-600 animate-pulse rounded-md text-white">Loading</div>
    </div>
  </div>
</div>
  )
}


