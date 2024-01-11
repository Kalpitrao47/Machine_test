// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 flex justify-around">
      <div className="flex flex-col items-center">
        <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/10/18094252/blossom.png" alt="Company Logo" className="w-16 h-16 mb-2" />
        <p className="text-sm">Blossom Boost</p>
      </div>

      <div className="flex flex-col">
      
        <h3 className="text-lg mb-2">Contact Us</h3>
        <p>Email: kalpitraorane46@gmail.com</p>
        <p>Phone: +918928439573</p>
      </div>

      <div className="flex flex-col">
        
        <h3 className="text-lg mb-2">Quick Links</h3>
        <ul>
          <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
          
        </ul>
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg mb-2">Follow Us</h3>
        <div className="flex">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" className="w-8 h-8 mr-2 cursor-pointer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" className="w-8 h-8 mr-2 cursor-pointer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
