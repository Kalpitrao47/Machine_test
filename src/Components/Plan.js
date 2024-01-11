import React from 'react'

const Plan = () => {
  return (
    <div>

        <h1 className='font-semibold text-4xl mt-20'>
            Plan
        </h1>
        <div className="flex justify-center items-center h-screen">
     
      <div className="w-full h-96 bg-purple-400 m-2 flex flex-col justify-center items-center rounded-xl ">
        Box 1
        <button className="bg-purple-700 text-white px-4 py-2 m-2 rounded-md">Select</button>
      </div>

   
      <div className="w-full h-96 bg-purple-400 m-2 flex flex-col justify-center items-center rounded-xl">
        Box 2
        <button className="bg-purple-700 text-white px-4 py-2 m-2 rounded-md">Select</button>
      </div>

 
      <div className="w-full h-96 bg-purple-400 m-2 flex flex-col justify-center items-center rounded-xl">
        Box 3
        <button className="bg-purple-700 text-white px-4 py-2 m-2 rounded-md">Select</button>
      </div>

  
      <div className="w-full h-96 bg-purple-400 m-2 flex justify-center items-center flex-col rounded-xl">
        Box 4
        <button className="bg-purple-700 text-white px-4 py-2 m-2 rounded-md">Select</button>
      </div>
      
    </div>
    </div>
  )
}

export default Plan