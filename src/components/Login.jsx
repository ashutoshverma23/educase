import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  // Validate if email and password are entered
  const validateForm = (data) => {
    setIsFormValid(data.email.trim() !== "" && data.password.trim() !== "");
  };

  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="bg-[#F7F8F9] text-[#1D2226] p-6 w-full sm:w-[375px] h-[100dvh] sm:h-[812px] border border-gray-200 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mt-2 mr-8 pr-4">
          Sign in to your PopX account
        </h1>
        <p className="opacity-[60%] mt-2 mr-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-6 relative">
          <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-sm font-medium text-[#6C25FF]">
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
          <label className="absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-sm font-medium text-[#6C25FF]">
            Password
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

        <Link to={isFormValid ? "/profile" : "#"}>
          <button
            disabled={!isFormValid}
            className={`mt-4 w-full py-3 rounded-lg font-medium ${
              isFormValid
                ? "bg-[#6C25FF] text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
