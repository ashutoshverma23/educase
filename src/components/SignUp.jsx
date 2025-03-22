import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="bg-neutral-100 p-6 w-full sm:w-[375px] h-[100dvh] sm:h-[812px] border border-gray-200 rounded-2xl shadow-md flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mr-8 pr-16">
            Create your PopX account
          </h1>

          <form className="mt-4 text-left space-y-4 flex-grow">
            <div className="mt-6 relative">
              <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-purple-600">
                Full Name*
              </label>
              <input
                type="text"
                placeholder="Marry Doe"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="mt-6 relative">
              <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-purple-600">
                Phone number*
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

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
                Password*
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="mt-6 relative">
              <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-purple-600">
                Company name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Are you an Agency? <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center space-x-4 mt-1">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="agency"
                    className="form-radio text-purple-600"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="agency"
                    className="form-radio text-purple-600"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Button positioned at the bottom */}
        <Link to="/profile">
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition cursonr-pointer">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
