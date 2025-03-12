import React, { useEffect, useState } from "react";
import Background from "../assets/background.svg";
import Background1 from "../assets/svg.png";
import { useNavigate } from "react-router-dom";
import Background2 from "../assets/11player.svg"; // 11 player image
import Background3 from "../assets/6player.svg"; // 6 player image
import tick from "../assets/tickpic.svg";
import tick2 from "../assets/tick2.svg";

const Playwithus = () => {
  const navigate = useNavigate();
  // State to control the animation
  const [isAnimated, setIsAnimated] = useState(false);

  // Start animation after component mounts
  useEffect(() => {
    // Short delay before starting animation
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadClick = () => {
    navigate("/download");
  };

  return (
    <div className="relative">
      {/* Background image for top right */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "top right",
          zIndex: 0,
        }}
      />

      {/* Background image for top left */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundPosition: "top left",
          zIndex: 0,
        }}
      />

      {/* Content section */}
      <section className="relative z-10 bg-transparent">
        <div className="lg:mx-16 lg:px-4 px-2 pb-4">
          <div className="flex justify-between items-center lg:pt-8 md:pt-2 pt-1">
            <h2 className="xl:text-7xl lg:text-[50px] md:text-[35px] text-lg font-[600] text-[#344054] md:mb-8 lg:mb-8 mb-4 font-montserrat">
              Play with us and enjoy <br />
              every <span className="text-[#007BFF]">Minute</span>
            </h2>
            <div className="flex justify-end  items-center md:mb-8 lg:mb-8 mb-4">
              <button
                className="bg-[#2E67F4] lg:h-[52px] hover:bg-blue-700 lg:w-full md:h-[52px] md:w-full lg:text-[16px] md:text-[16px] text-[10px] font-[700] font-montserrat  focus-within:ring-2 focus-within:ring-blue-800 text-white md:px-6 lg:py-0 md:py-0 lg:px-6 px-2 py-2 rounded-full"
                onClick={handleDownloadClick}
              >
                See All
              </button>
            </div>
          </div>

          {/* Updated card section based on the image provided */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-6 w-full h-full">
            {/* 11 Player Fantasy Card */}
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
              <div className="relative bg-[#F6F6F6]">
                <img
                  src={Background2}
                  alt="11 Player Cricket Fantasy"
                  className="w-full rounded-t-lg p-4"
                />
                <div className="bg-[#285AD7] text-white p-5 flex justify-between items-center rounded-b-lg">
                  <h3 className="lg:text-xl font-montserrat font-semibold">
                    11 Player Cricket Fantasy
                  </h3>

                  {/* See more button with auto animation */}
                  <div className="relative h-10">
                    {/* Expanded button that automatically slides in */}
                    <div
                      className={`absolute right-0 overflow-hidden transition-all duration-700 h-10 ${
                        isAnimated ? "w-32" : "w-0"
                      }`}
                    >
                      <button className="bg-[#285AD7] text-white font-medium rounded-lg border border-white h-full w-32 flex items-center justify-between px-3">
                        <span className="text-md font-semibold font-montserrat whitespace-nowrap">
                          See more
                        </span>
                        <img src={tick} alt="Arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 Player Fantasy Card */}
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
              <div className="relative bg-[#F6F6F6]">
                <img
                  src={Background3}
                  alt="6 Player Cricket Fantasy"
                  className="w-full rounded-t-lg p-4"
                />
                <div className="bg-[#285AD7] text-white p-5 flex justify-between items-center rounded-b-lg">
                  <h3 className="lg:text-xl font-montserrat font-semibold">
                    6 Player Cricket Fantasy
                  </h3>

                  {/* See more button with auto animation */}
                  <div className="relative h-10">
                    {/* Expanded button that automatically slides in */}
                    <div
                      className={`absolute right-0 overflow-hidden transition-all duration-700 h-10 ${
                        isAnimated ? "w-32" : "w-0"
                      }`}
                    >
                      <button className="bg-[#285AD7] text-white font-medium rounded-lg border border-white h-full w-32 flex items-center justify-between px-3">
                        <span className="text-md font-semibold font-montserrat whitespace-nowrap">
                          See more
                        </span>
                        <img src={tick} alt="Arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Playwithus;
