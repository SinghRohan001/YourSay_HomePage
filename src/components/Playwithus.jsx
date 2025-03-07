import React from "react";
import Background from "../assets/background.svg";
import Background1 from "../assets/svg.png";
import { useNavigate } from "react-router-dom";
import Background2 from "../assets/bg1.png";
import Background3 from "../assets/bg2.png";
import tick from "../assets/tick1.png";
import tick2 from "../assets/tick2.svg";

const Playwithus = () => {
  const navigate = useNavigate();

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
        <div className="lg:mx-16 lg:px-4 px-2 pb-4 ">
          <div className="flex justify-between items-center lg:pt-8 md:pt-2 pt-1">
            <h2 className="xl:text-7xl lg:text-[50px] md:text-[35px] text-lg font-[600] text-[#344054] md:mb-8 lg:mb-8 mb-4 font-montserrat">
              Play with us and enjoy <br />
              every <span className="text-[#007BFF]">Minute</span>
            </h2>
            <div className="flex justify-end items-center md:mb-8 lg:mb-8 mb-4">
              <button
                className="bg-[#2E67F4] lg:h-[52px] hover:bg-blue-700 lg:w-full md:h-[52px] md:w-full lg:text-[16px] md:text-[16px] text-[10px] font-[700] font-montserrat focus-within:ring-2 focus-within:ring-blue-800 text-white md:px-6 lg:py-0 md:py-0 lg:px-6 px-2 py-2 rounded-full"
                onClick={handleDownloadClick}
              >
                See All
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-6 w-full h-full">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={Background2}
                alt="Background"
                className="w-full h-full"
              />

              <div className="absolute bottom-0 left-0 right-0  px-8 py-4 group-hover:opacity-0">
                <h3 className="text-white text-3xl lg:text-6xl font-bold ">
                  Opinion Trading
                </h3>
              </div>

              {/* Description only visible on hover */}
              <div className="absolute bottom-3 rounded-xl left-3 right-3 bg-[#000000]/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:px-8 py-2 lg:py-4">
                <h3 className="text-white text-lg lg:text-6xl font-bold lg:mb-4">
                  Opinion Trading
                </h3>
                <p className="text-white text-xs lg:text-md">
                  Opinion trading is a platform where users can stake real money
                  on the outcome of future events such as sports scores,
                  election results, or cryptocurrency trends. These platforms
                  allow users to make predictions and earn rewards based on the
                  accuracy of their forecasts....
                </p>
              </div>

              {/* Right arrow icon */}
              <div className="absolute top-4 right-4 rounded-full z-10 transition-colors duration-300 bg-transparent">
                <img
                  src={tick}
                  className="block w-10 h-10 lg:w-full lg:h-full group-hover:hidden transition-opacity duration-300"
                />
                <img
                  src={tick2}
                  className="hidden  w-10 h-10 lg:w-full lg:h-full group-hover:block transition-opacity duration-300"
                />
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={Background3}
                alt="Background"
                className="w-full h-full "
              />
              <div className="absolute bottom-0 left-0 right-0  px-8 py-4 group-hover:opacity-0">
                <h3 className="text-white text-3xl lg:text-6xl font-bold ">
                  Lightning Fantasy
                </h3>
              </div>

              <div className="absolute bottom-3 rounded-xl left-3 right-3 bg-[#000000]/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:px-8 py-2 lg:py-4">
                <h3 className="text-white text-lg lg:text-6xl font-bold lg:mb-4">
                  Lightning Fantasy
                </h3>
                <p className="text-white text-xs lg:text-md">
                A 6-player cricket fantasy app is a platform where users create a team of six players and compete based on real match performances. Users earn points according to their selected players' statistics, such as runs scored, wickets taken, and overall impact on the game....
                </p>
              </div>

              {/* Right arrow icon */}
              {/* Right arrow icon */}
              <div className="absolute top-4 right-4 rounded-full z-10 transition-colors duration-300 bg-transparent">
                <img
                  src={tick}
                  className="block w-10 h-10 lg:w-full lg:h-full group-hover:hidden transition-opacity duration-300"
                />
                <img
                  src={tick2}
                  className="hidden w-10 h-10 lg:w-full lg:h-full group-hover:block transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Playwithus;
