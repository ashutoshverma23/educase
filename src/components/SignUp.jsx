import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: value };
      validateForm(updatedForm);
      return updatedForm;
    });
  };

  // Validate if all required fields are filled
  const validateForm = (data) => {
    const { fullName, phoneNumber, password, isAgency } = data;
    setIsFormValid(fullName && phoneNumber && password && isAgency);
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="bg-neutral-100 p-6 w-full sm:w-[375px] h-[100dvh] sm:h-[812px] border border-gray-200 rounded-2xl shadow-md flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mr-8 pr-16">
            Create your PopX account
          </h1>

          <form className="mt-4 text-left space-y-4 flex-grow">
            <div className="mt-6 relative">
              <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-[#6C25FF]">
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Marry Doe"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
              />
            </div>

            <div className="mt-6 relative">
              <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-[#6C25FF]">
                Phone number*
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
              />
            </div>

            <div className="mt-6 relative">
              <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-[#6C25FF]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
              />
            </div>

            <div className="mt-6 relative">
              <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-[#6C25FF]">
                Password*
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
              />
            </div>

            <div className="mt-6 relative">
              <label className="absolute -top-3 left-3 bg-neutral-100 px-1 text-sm font-medium text-[#6C25FF]">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
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
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === "yes"}
                    onChange={handleChange}
                    className="form-radio text-[#6C25FF]"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === "no"}
                    onChange={handleChange}
                    className="form-radio text-[#6C25FF]"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Button positioned at the bottom */}
        <Link to={isFormValid ? "/profile" : "#"}>
          <button
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg font-medium ${
              isFormValid
                ? "bg-[#6C25FF] text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
