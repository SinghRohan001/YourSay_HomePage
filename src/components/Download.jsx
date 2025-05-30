import React, { useState } from "react";
import WelcomeModel from "./WelcomeModel";
import bgImage from "../assets/section1.svg";
import bgImagetab from "../assets/123545+65.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import play from "../assets/play.svg";
import apple from "../assets/apple.svg";
import gif from "../assets/Recent updated1.gif";
import live from "../assets/Live Now.gif";
import yoursay from "../assets/Yoursay1.svg";
import play1 from "../assets/play2.svg";
import app1 from "../assets/app2.svg";
import play3 from "../assets/play3.svg";
import app3 from "../assets/app3.svg";

export const Download = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCopyAlert, setShowCopyAlert] = useState(false);

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

  const handleShareAppLink = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://play.google.com/store/search?q=yoursay&c=apps&hl=en"
      );
      setShowCopyAlert(true);

      // Show success toast instead of separate alert
      toast.success("Link copied successfully!");

      // Hide the alert after 2 seconds
      setTimeout(() => {
        setShowCopyAlert(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
      toast.error("Failed to copy link");
    }
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
        className="hidden lg:block fixed inset-0 w-full h-full bg-cover bg-no-repeat  bg-top -z-10"
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
        <div className="px-2 md:px-8 lg:px-16 mx-auto">
          {/* Tablet-only heading */}

          <div className="flex flex-col  md:flex-row lg:flex-row lg:items-top justify-between gap-8 md:gap-4 lg:gap-0">
            {/* Left Content */}
            <div className="w-full md:w-1/2 lg:w-[60%]   mt-0 lg:mt-32">
              {/* Desktop-only heading */}
              <div className="flex  lg:w-[100%] w-[56%]">
                <img src={yoursay} className="" />
                <img src={live} className="lg:w-[18%] w-[50%]" /> 
              </div>

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
              <h1 className="text-xl lg:text-3xl font-inter mb-2 font-semibold  ">
                YourSay Fantasy Cricket App is Now Live!
              </h1>

              <p className=" hidden md:block lg:block mb-4  xl:text-lg text-black font-inter lg:max-w-sm xl:max-w-[70%] font-[500] leading-[2rem] ">
                The YourSay fantasy cricket app is now live on the Play Store.
                Draft your team, play smart, and win real rewards with live
                leaderboards and expert insights.
              </p>
              <p className=" block md:hidden text-md md:text-md lg:text-sm xl:text-lg text-black font-inter lg:max-w-sm xl:max-w-xl font-[500]  leading-relaxed  mb-4 lg:mb-0">
                The YourSay fantasy cricket app is now live on the Play Store.
                Draft your team, play smart, and win real rewards with live
                leaderboards and expert insights.
              </p>

              <div className="flex flex-col lg:flex-row items-start lg:pt-24 ">
                <div className="flex flex-col  ">
                  <div className="flex flex-col lg:flex-row gap-1 lg:gap-5">
                    {/* Google Play Store Button */}
                    <div className="hidden lg:flex lg:flex-col  ">
                      <p className="font-inter lg:text-sm text-black font-semibold mb-1 lg:mb-4">
                        Download now
                      </p>
                      <a
                        href="https://play.google.com/store/search?q=yoursay&c=apps&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-52 "
                      >
                        <img src={play1} alt="Download on Play Store" />
                      </a>
                    </div>

                    {/* Apple App Store Button */}
                    <div className="hidden lg:flex lg:flex-col ">
                      <p className="font-inter lg:text-sm text-black font-semibold mb-1 mt-2 lg:mt-0 lg:mb-4">
                        Launching soon
                      </p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-52 "
                      >
                        <img src={app1} alt="Download on Play Store" />
                      </a>
                    </div>

                    <div className="flex gap-4">
                      {/* Google Play Store Button */}
                      <div className="lg:hidden flex flex-col">
                        <p className="font-inter lg:text-sm text-black font-semibold mb-2">
                          Download now
                        </p>
                        <a
                          href="https://play.google.com/store/search?q=yoursay&c=apps&hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-40 "
                        >
                          <img src={play3} alt="Download on Play Store" />
                        </a>
                      </div>

                      {/* Apple App Store Button */}
                      <div className="lg:hidden flex flex-col ">
                        <p className="font-inter lg:text-sm text-black font-semibold mb-2">
                          Launching soon
                        </p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-40 "
                        >
                          <img src={app3} alt="Download on Play Store" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className=" hidden md:block lg:block w-full md:w-[40%] lg:w-[50%] xl:w-[46%] relative lg:mt-20">
              <div className="relative h-64 md:h-82 xl:h-[590px]   lg:h-62 mx-auto">
                <div className="absolute -z-10 rounded-full top-1/2 left-1/2"></div>
                <div className="w-full h-full rounded-2xl md:rounded-[2rem]">
                  <img
                    src={gif}
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
