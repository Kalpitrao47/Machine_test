import React from 'react'

const GradientAbout = () => {
  return (
//     <div className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
//         <div className='flex justify-center justify-items-center items-center'>
//             <div>
//             <h1>
//             BlossomBoost
//             </h1>
//         <h2>
//         Amplify Your Impact with a Bouquet
// of Likes and Flowers!
//         </h2>
//         <button className='bg-blue-950 rounded-md px-3 py-3'>
//             Know More
//         </button>
//             </div>
            
//         <img className='h-30 w-50 mt-10 mb-10' src='https://img.freepik.com/free-photo/close-up-orchid-flower-details_23-2149417902.jpg?size=626&ext=jpg'/>
//         </div>
//     </div>
<div className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/003/823/523/non_2x/background-nature-flower-mexican-aster-purple-flowers-background-blur-wallpaper-flower-space-for-text-free-photo.jpg")' }}>
<div className="absolute bg-opacity-60 bg-gray-800 inset-0"></div>
<div className="relative z-10 text-white text-center">
  <h1 className="text-4xl font-bold mb-4">Blossom Boost</h1>
  <p className="text-lg">
  Amplify Your Impact with a Bouquet
 of Likes and Flowers!
  </p>
  <button className='bg-blue-950 rounded-md px-3 py-3'>
             Know More
         </button>
</div>
</div>
  )
}

export default GradientAbout