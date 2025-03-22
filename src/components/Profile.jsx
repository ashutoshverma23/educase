import React from "react";
import thumbnail from "../assets/thumbnail2x.png";
import cameraIcon from "../assets/cameraIcon.svg";

const Profile = () => {
  return (
    <div className="flex justify-center min-h-screen bg-white text-gray-900">
      <div className=" bg-neutral-100 w-full sm:w-[375px] h-[100dvh] sm:h-[812px] border border-gray-200 border-radius-2xl shadow-md">
        <div className="flex p-4 items-center justify-between bg-white h-[65px] shadow-bottom">
          <h1 className="text-xl font-semibold text-gray-900">
            Account Settings
          </h1>
        </div>

        <div className="mt-4 mx-6 flex items-center space-x-4">
          <div className="relative">
            <img src={thumbnail} alt="Profile" className="w-16 h-16" />
            <span className="absolute bottom-0 right-0 ">
              <img src={cameraIcon} alt="upload button" />
            </span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Marry Doe</h2>
            <p className="text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="my-4 text-gray-700 ml-6 mr-6">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <hr className="border-t-2 border-dotted border-gray-300 w-full my-4" />
      </div>
    </div>
  );
};

export default Profile;
