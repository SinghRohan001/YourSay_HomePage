import React, { useState } from "react";
import WelcomeModel from "./WelcomeModel";
import bgImage from "../assets/section1.svg";
import bgImagetab from "../assets/123545+65.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import right from "../assets/arrow-right.svg";
import right1 from "../assets/share.svg";
import qr from "../assets/code2.png";
import gif from "../assets/Recent updated1.gif"

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
      await navigator.clipboard.writeText("https://yoursay.live/");
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
        <div className="px-2 md:px-8 lg:px-10 mx-auto">
          {/* Tablet-only heading */}
          <h1 className="hidden md:block lg:hidden  text-2xl lg:text-xl xl:text-3xl font-bold pt-12 md:pt-20 text-[#007BFF] leading-tight font-inter">
            Welcome to YourSay
          </h1>

          {/* Mobile heading */}
          <h1 className="md:hidden flex  items-center justify-center text-2xl  font-bold pt-6 text-[#007BFF] leading-tight font-inter">
            Welcome to YourSay
          </h1>

          <div className="flex flex-col md:flex-row lg:flex-row lg:items-top justify-between gap-8 md:gap-4 lg:gap-0">
            {/* Left Content */}
            <div className="w-full md:w-1/2 lg:w-[60%] space-y-4 md:space-y-6 lg:space-y-8  mt-0 lg:mt-40">
              {/* Desktop-only heading */}
              <h1 className="hidden lg:block text-3xl xl:text-[60px] lg:text-[40px] font-[900] text-[#007BFF] font-inter">
                Welcome to YourSay
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

              <p className=" hidden md:block lg:block text-sm md:text-md lg:text-sm xl:text-xl text-black font-inter lg:max-w-sm xl:max-w-[85%]  font-[500] md:leading-loose leading-normal  ">
                You are among the first 100 members to join, and we have some
                exciting rewards waiting for you!
                <br />
                Download the app now and be one of the first to explore it! You
                might also get special rewards for joining early!
                <br />
                Exciting rewards await our supporters and contributors in
                shaping the platform. Stay tuned for updates on building
                something amazing with us.
              </p>
              <p className=" block md:hidden text-sm md:text-md lg:text-sm xl:text-lg text-black font-inter lg:max-w-sm xl:max-w-xl font-[500] leading-normal md:leading-relaxed ">
                You are among the first 100 members to join, and we have some
                exciting rewards waiting for you!
                <br />
                Download the app now and be one of the first to explore it! You
                might also get special rewards for joining early!
                <br />
                Exciting rewards await our supporters and contributors in
                shaping the platform. Stay tuned for updates on building
                something amazing with us.
              </p>

              <div className="flex flex-col lg:flex-row items-center justify-center">
                {/* QR Code */}
                <div className="lg:mr-10 mb-3 sm:mb-0">
                  <div className="w-32 h-32 bg-white">
                    <img src={qr} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h2 className="lg:text-2xl hidden lg:block  font-bold mb-2 font-inter text-[#007BFF] text-center lg:text-left">
                    SCAN QR TO
                    <br />
                    DOWNLOAD APP
                  </h2>
                  <h2 className="lg:text-2xl w-full lg:hidden  font-bold mb-2 md:mt-2 font-inter text-[#007BFF] text-center ">
                    SCAN QR TO DOWNLOAD APP
                  </h2>

                  {/* Buttons */}
                  <div className="flex flex-row lg:space-y-0 mt-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-1 py-1  lg:px-2 lg:py-2 flex items-center justify-center"
                      onClick={() =>
                        window.open(
                          "https://yoursayimages.b-cdn.net/app-release-new.apk",
                          "_blank"
                        )
                      }
                    >
                      Download App
                      <img src={right} className="ml-2" alt="Arrow right" />
                    </button>

                    <button
                      className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium px-1 py-1 lg:px-2 lg:py-2 flex items-center justify-center"
                      onClick={handleShareAppLink}
                    >
                      Share App link
                      <img src={right1} className="ml-2" alt="Share icon" />
                    </button>
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
