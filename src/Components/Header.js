import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex border border-400 p-5 justify-between">
        <div className="flex">
          <img className="h-20 w-20" src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/10/18094252/blossom.png"/>
          <div className="flex ml-4 p-2">
            <h1 className="font-extrabold mt-5 mr-2 text-pink-500">
              Blossom Boost
            </h1>
          </div>
        </div>
        <div className="flex p-2 mt-5">
          <div className="mr-5 hover:text-pink-500 font-semibold text-gray-600">
            <h1>Home</h1>
          </div>
          <div className="mr-5 hover:text-pink-500 font-semibold text-gray-600">
            <h1>About Us</h1>
          </div>
          <div className="mr-5 hover:text-pink-500 font-semibold text-gray-600">
            <h1>Shop Now</h1>
          </div>
          <div className="mr-5 hover:text-pink-500 font-semibold text-gray-600">
            <h1>Get Involved</h1>
          </div>
          <div className="mr-5 hover:text-pink-500 font-semibold text-gray-600">
            <h1>Sign Up</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
