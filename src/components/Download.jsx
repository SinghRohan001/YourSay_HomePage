import React, { useState } from "react";
import WelcomeModel from "./WelcomeModel";
import { FaArrowRight } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import bgImage from "../assets/Downloafd screen1.svg";
import bgImagetab from "../assets/123545+65.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import play from "../assets/appstore.svg";
import google from "../assets/Mobile app store badge.svg";

export const Download = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateMobile = (number) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(number);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setMobileNumber(value);
      if (value.length > 10) {
        toast.error("Mobile number should be 10 digits");
      }
    }
  };

  const handleDownload = () => {
    if (!mobileNumber.trim()) {
      toast.error("Please enter a mobile number");
      return;
    }

    if (!validateMobile(mobileNumber)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsModalOpen(true);
  };

  return (
    <>
      {/* Tablet Background - visible only on md screens */}
      <div
        className="hidden md:block lg:hidden fixed inset-0 w-full h-full bg-no-repeat bg-contain -bg-top-10 -z-10"
        style={{ backgroundImage: `url(${bgImagetab})` }}
      />

      {/* Desktop Background - visible only on lg screens and up */}
      <div
        className="hidden lg:block fixed inset-0 w-full h-full bg-no-repeat bg-auto bg-top -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="w-full min-h-screen p-4 md:p-6 lg:p-8">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <WelcomeModel
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <div className="px-4 md:px-8 lg:px-10 mx-auto">
          {/* Tablet-only heading */}
          <h1 className="hidden md:block lg:hidden  text-2xl lg:text-xl xl:text-3xl font-bold pt-12 md:pt-20 text-[#007BFF] leading-tight font-inter">
            YourSay, a Fantasy and Opinion Trading App
          </h1>

          {/* Mobile heading */}
          <h1 className="block md:hidden text-2xl  font-bold pt-6 text-[#007BFF] leading-tight font-inter">
            YourSay, a Fantasy and Opinion Trading App
          </h1>

          <div className="flex flex-col md:flex-row lg:flex-row lg:items-top justify-between gap-8 md:gap-4 lg:gap-0 mt-0 md:mt-12 lg:mt-20">
            {/* Left Content */}
            <div className="w-full md:w-1/2 lg:w-[60%] space-y-4 md:space-y-6 lg:space-y-8">
              {/* Desktop-only heading */}
              <h1 className="hidden lg:block text-3xl xl:text-[60px] lg:text-[40px] font-[900] text-[#007BFF] leading-relaxed font-inter">
                YourSay, a Fantasy and Opinion Trading App
              </h1>
              <div className="w-full block md:hidden  md:w-[40%] lg:w-[50%] xl:w-[46%] relative  lg:mt-0">
                <div className="relative h-64 md:h-82 xl:h-[590px]   lg:h-62 mx-auto">
                  <div className="absolute -z-10 rounded-full top-1/2 left-1/2"></div>
                  <div className="w-full h-full rounded-2xl md:rounded-[2rem]">
                    <img
                      src="https://res.cloudinary.com/dcm2nozgx/image/upload/v1741330500/Grey_Frame_fftheg.gif"
                      alt="YourSay App Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <p className=" hidden md:block lg:block text-sm md:text-md lg:text-sm xl:text-lg text-[#007BFF] font-inter lg:max-w-sm xl:max-w-xl font-[500] leading-normal md:leading-relaxed ">
                Welcome to YourSay, a groundbreaking app that combines opinion
                trading and cricket fantasy gaming. Engage in real-time
                predictions, trade opinions on trending topics, and build your
                dream fantasy cricket team— all in one dynamic platform.
                Connect, compete, and thrive in an interactive digital ecosystem
                designed for sports and trading enthusiasts.
              </p>
              <p className=" block md:hidden text-sm md:text-md lg:text-sm xl:text-lg text-[#007BFF] font-inter lg:max-w-sm xl:max-w-xl font-[500] leading-normal md:leading-relaxed ">
                Welcome to YourSay, a groundbreaking app that combines opinion
                trading and cricket fantasy gaming. Engage in real-time
                predictions, trade opinions on trending topics, and build your
                dream fantasy cricket team— all in one dynamic platform.
                Connect, compete, and thrive in an interactive digital ecosystem
                designed for sports and trading enthusiasts.
              </p>

              {/* Mobile Number Input */}
              <div className="relative w-full max-w-md">
                <div className="flex items-center">
                  <div className="absolute left-3 text-gray-400">
                    <LuPhone size={20} />
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter Your Mobile Number"
                    value={mobileNumber}
                    onChange={handleMobileChange}
                    maxLength={10}
                    className="w-full px-4 py-3 pl-10 pr-32 rounded-lg font-inter border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    className="absolute right-0 px-2 md:px-3 lg:px-4 py-3.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-1 md:space-x-2 font-inter text-xs md:text-sm"
                    onClick={handleDownload}
                  >
                    <span>Download App</span>
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex space-x-2 md:space-x-4">
                <img
                  src={play}
                  alt="YourSay App Interface"
                  className="w-32 md:w-auto cursor-pointer"
                />
                <img
                  src={google}
                  alt="YourSay App Interface"
                  className="w-32 md:w-auto cursor-pointer"
                />
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className=" hidden md:block lg:block w-full md:w-[40%] lg:w-[50%] xl:w-[46%] relative  lg:mt-0">
              <div className="relative h-64 md:h-82 xl:h-[590px]   lg:h-62 mx-auto">
                <div className="absolute -z-10 rounded-full top-1/2 left-1/2"></div>
                <div className="w-full h-full rounded-2xl md:rounded-[2rem]">
                  <img
                    src="https://res.cloudinary.com/dcm2nozgx/image/upload/v1741330500/Grey_Frame_fftheg.gif"
                    alt="YourSay App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
