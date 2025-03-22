import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center bg-white">
        <div className="flex flex-col items-end">
          <div className="bg-neutral-100 p-6 w-full sm:w-[375px] h-[100dvh] sm:h-[812px] border border-gray-200 rounded-2xl shadow-md flex flex-col justify-end">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to PopX
            </h1>
            <p className="text-gray-500 mt-2 text-lg mr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/signup">
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition cursor-pointer">
                Create Account
              </button>
            </Link>
            <Link to="/login">
              <button className="mt-4 mb-4 w-full bg-purple-400 py-2 rounded-lg font-medium hover:bg-purple-600 transition cursor-pointer">
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
