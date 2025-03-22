import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className=" bg-neutral-100 p-6  w-full sm:w-[375px] h-[100dvh] sm:h-[812px] border border-gray-200 border-radius-2xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mr-8 pr-4">
          Sign in to your PopX account
        </h1>
        <p className="text-gray-500 mt-2 mr-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-6 relative">
          <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-purple-600">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="mt-6 relative">
          <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-purple-600">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <Link to="/profile">
          <button className="mt-4 w-full bg-gray-300 hover:bg-gray-500 text-white py-2 rounded-lg font-medium cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
