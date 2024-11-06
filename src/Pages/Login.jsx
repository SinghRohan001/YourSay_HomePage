
import Login1 from '../assets/Login page.png'
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import background from '../assets/Background image_Planetry.png'

const Login = () => {

    const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  return (
    <div className=''>
        <div 
  className="w-full h-screen flex justify-center absolute bg-cover bg-center bg-no-repeat" 
  style={{
    backgroundImage: `url(${background})`
  }}
>
        <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[350px] md:w-[400px]">
        <h1 className="text-2xl font-[600] text-[#101828] font-montserrat text-center mb-6">
          Login to your account
        </h1>
        {/* Mobile Number Input */}
        <div className="mb-4">
          <label className="block font-montserrat text-[#344054] text-sm font-[400] mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full px-4 py-2 border font-montserrat font-[400] text-sm text-[#344054] rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter Mobile Number"
          />
        </div>
        {/* OTP Input */}
        <div className="mb-4 relative">
          <div className="flex justify-between">
            <label className="block font-montserrat text-[#344054] text-sm font-[400]">
              Enter OTP
            </label>
            {/* Change Number */}
            <div className="mb-2 flex justify-center ">
              <a href="#" className="text-sm text-[#1570EF] font-montserrat font-[400] hover:underline">
                Change Number ?
              </a>
            </div>
          </div>
          <input
            type={showOtp ? "text" : "password"}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 border font-montserrat font-[400] text-sm text-[#344054] rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter OTP"
          />
          <span
            className="absolute inset-y-0 top-7 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setShowOtp(!showOtp)}
          >
            {showOtp ? (
                <IoEyeOutline />
            ) : (
                <FaRegEyeSlash />
            )}
          </span>
        </div>
        {/* Login Button */}
        <div className="mb-4">
          <button className="w-full bg-blue-500 text-white py-2 font-montserrat font-[600] rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Login
          </button>
        </div>
        {/* Sign Up Link */}
        <div className="text-center font-[400] font-montserrat text-[#98A2B3] text-sm">
          Don’t Have An Account?{" "}
          <a href="#" className="text-[#1570EF] font-[400] font-montserrat hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Login