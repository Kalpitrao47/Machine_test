import React from 'react'

const GradientAbout = () => {
  return (
    <div className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
        <div className='flex justify-center justify-items-center items-center'>
            <div>
            <h1>
            BlossomBoost
            </h1>
        <h2>
        Amplify Your Impact with a Bouquet
of Likes and Flowers!
        </h2>
        <button className='bg-blue-950 rounded-md px-3 py-3'>
            Know More
        </button>
            </div>
            
        <img className='h-30 w-50 mt-10 mb-10' src='https://img.freepik.com/free-photo/close-up-orchid-flower-details_23-2149417902.jpg?size=626&ext=jpg'/>
        </div>
    </div>
  )
}

export default GradientAbout