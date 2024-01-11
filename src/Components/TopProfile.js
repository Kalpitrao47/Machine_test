import React from "react";

const TopProfile = () => {
  return (
    <div className="mt-10">
      <h1 className="font-semibold text-4xl">Top Profile For This Week</h1>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col mr-5 mt-20">
          <img src="https://www.shutterstock.com/image-photo/portrait-attractive-cheerful-girl-demonstrating-260nw-2113649489.jpg" />
          <h2>Amita Patil</h2>
          <h3>35K</h3>
        </div>
        <div className="flex flex-col mr-5 mt-10">
          <img src="https://www.shutterstock.com/image-photo/portrait-attractive-cheerful-girl-demonstrating-260nw-2113649489.jpg" />
          <h2>Nita Choudhari</h2>
          <h3>99K</h3>
        </div>
        <div className="flex flex-col mt-20">
          <img src="https://www.shutterstock.com/image-photo/portrait-attractive-cheerful-girl-demonstrating-260nw-2113649489.jpg" />
          <h2>Anisha Roy</h2>
          <h3>25K</h3>
        </div>
      </div>
    </div>
  );
};

export default TopProfile;
