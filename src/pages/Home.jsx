import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center bg-white">
        <div className="flex flex-col items-end">
          <div className="bg-[#F7F8F9] text-[#1D2226] p-6 w-full sm:w-[375px] h-[100dvh] sm:h-[812px] border border-gray-200 rounded-2xl shadow-md flex flex-col justify-end">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to PopX
            </h1>
            <p className="mt-2 text-lg opacity-[60%] mr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/signup">
              <button className="mt-4 w-full bg-[#6C25FF] text-white py-3 rounded-lg font-medium cursor-pointer">
                Create Account
              </button>
            </Link>
            <Link to="/login">
              <button className="mt-4 mb-4 w-full bg-[#6C25FF4B] py-3 rounded-lg font-medium cursor-pointer">
                Already Registered? Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
