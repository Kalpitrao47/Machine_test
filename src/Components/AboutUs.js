import React from 'react'

const AboutUs = () => {
  return (
    <div>       
        <div className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
        <div className='flex justify-center justify-items-center items-center'>
            <div>
            <h1 className='font-semibold text-4xl'>
            About Us
            </h1>
        <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.
        </h2>
        <button className='bg-blue-950 rounded-md px-3 py-3'>
            Know More
        </button>
            </div>
            
        <img className='h-30 w-50 mt-10 mb-10' src='https://img.freepik.com/free-photo/close-up-orchid-flower-details_23-2149417902.jpg?size=626&ext=jpg'/>
        </div>
    </div>
    </div>
  )
}

export default AboutUs