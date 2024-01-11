import React from "react";

const SocialLogo = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col mx-5">
        <img
          className="h-40 w-40 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
        />
        <h1>Instagram</h1>
      </div>

      <div>
        <img
          className="h-40 w-40 cursor-pointer mx-5"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
        />
        <h1>Facebook</h1>
      </div>

      <div>
        <img
          className="h-40 w-40 cursor-pointer mx-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
        />
        <h1>Twitter</h1>
      </div>

      <div>
        <img
          className="h-40 w-50 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
        />
        <h1>Youtube</h1>
      </div>
    </div>
  );
};

export default SocialLogo;
