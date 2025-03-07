import React, { useState } from "react";
import bgImage from "../assets/back.svg";
import { IoMdCloseCircleOutline } from "react-icons/io";

const WelcomeModal = ({ isOpen, onClose }) => {
  const [showCopyAlert, setShowCopyAlert] = useState(false);
  
  if (!isOpen) return null;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText('https://yoursay.live/');
      setShowCopyAlert(true);
      
      // Hide the alert after 2 seconds
      setTimeout(() => {
        setShowCopyAlert(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 bg-no-repeat w-50 h-50 bg-auto bg-center p-4 sm:p-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Modal background with blue circles */}
      <div className="relative w-full max-w-md">
        {/* Copy success message */}
        {showCopyAlert && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16">
            <div className="bg-green-500 text-white px-3 py-3 lg:px-6 lg:py-2 rounded-lg shadow-lg font-medium text-xs lg:text-base">
              Link copied successfully!
            </div>
          </div>
        )}

        {/* Modal content */}
        <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10  w-full mx-auto relative shadow-lg">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3"
          >
            <IoMdCloseCircleOutline className="w-6 h-6 sm:w-8 sm:h-8"/>
          </button>

          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-inter font-[700]">
              Welcome to YourSay
            </h1>
            <p className="text-base sm:text-lg font-inter font-[500] px-1">
              🎉 You are among the first 100 members to join, and we have some
              exciting rewards waiting for you! 🎉
            </p>

            {/* Info box with border */}
            <div className="rounded-3xl border-2 border-[#FF1818] overflow-hidden">
              {/* Light blue header */}
              <div className="bg-[#BBD9F4] p-3 sm:p-4">
                <p className="text-[#3D3D3D] text-sm sm:text-md font-[700] font-inter">
                  Exciting rewards await our supporters and contributors in
                  shaping the platform!
                </p>
              </div>

              {/* White section */}
              <div className="bg-white p-3 sm:p-4">
                <p className="text-sm sm:text-md font-[900] font-inter">
                  Stay tuned for updates of building something amazing with us.
                </p>
              </div>
            </div>

            {/* Share button */}
            <button 
              onClick={handleShare}
              className="bg-[#FBCD3A] hover:bg-[#FFC633] text-black font-[700] font-inter py-3 sm:py-4 md:py-5 px-8 sm:px-10 md:px-12 rounded-full text-lg sm:text-xl transition-colors duration-300"
            >
              Share & Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;