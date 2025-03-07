import React from "react";
import Group from "../assets/Group.svg";
import Device from "../assets/device.svg";
import Switch from "../assets/switch.svg";
import Star from "../assets/star.svg";
import Background from "../assets/background.svg";
import Background1 from "../assets/svg.png";
import { useNavigate } from "react-router-dom";

const WhyChooseYourSay = () => {
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
          zIndex: 0
        }}
      />
      
      {/* Background image for top left */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundPosition: "top left",
          zIndex: 0
        }}
      />
      
      {/* Content section */}
      <section className="relative z-10 bg-transparent">
        <div className="lg:mx-10 px-4 pb-4 ">
          <div className="flex justify-between items-center lg:pt-6 md:pt-2 pt-1">
            <h2 className="xl:text-[64px] lg:text-[50px] md:text-[35px] text-lg font-[600] text-[#101010] md:mb-8 lg:mb-8 mb-4 font-montserrat">
              Why Choose YourSay
            </h2>
            <div className="flex justify-end items-center md:mb-8 lg:mb-8 mb-4">
              <button
                className="bg-[#2E67F4] lg:h-[52px] hover:bg-blue-700 lg:w-full md:h-[52px] md:w-full lg:text-[16px] md:text-[16px] text-[10px] font-[700] font-montserrat focus-within:ring-2 focus-within:ring-blue-800 text-white md:px-6 lg:py-0 md:py-0 lg:px-6 px-2 py-2 rounded-lg"
                onClick={handleDownloadClick}
              >
                Start investing for FREE
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="border border-[#E5E5E5] p-8 rounded-lg shadow-md bg-white">
              <img src={Group} alt="Flexibility and Control" className="mb-4" />
              <h3 className="text-xl font-[600] font-montserrat mb-2">
                Designed for Flexibility and Control
              </h3>
              <p className="text-black font-[300] font-montserrat text-sm">
                YourSay offers you the freedom to manage your trades with
                flexible exit options and profit booking. Trade on your terms
                and adjust as the market shifts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[#E5E5E5] p-8 rounded-lg shadow-md bg-white">
              <img
                src={Device}
                alt="User-Friendly Accessibility"
                className="mb-4"
              />
              <h3 className="text-xl font-[600] font-montserrat mb-2">
                User-Friendly Accessibility
              </h3>
              <p className="text-black font-[300] font-montserrat text-sm">
                Our platform is designed to be intuitive and accessible. You
                have full control of your trading strategies, with the ability
                to exit or book profits at any time, ensuring you're always in
                charge.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-[#E5E5E5] p-8 rounded-lg shadow-md bg-white">
              <img
                src={Switch}
                alt="Adaptable Trading Options"
                className="mb-4"
              />
              <h3 className="text-xl font-[600] font-montserrat mb-2">
                Adaptable Trading Options
              </h3>
              <p className="text-black font-[300] font-montserrat text-sm">
                Our platform is built to accommodate your trading style, whether
                you prefer fast-paced trades or a more strategic approach.
                Experience flexibility in every trade you make.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-[#E5E5E5] p-8 rounded-lg shadow-md bg-white">
              <img
                src={Star}
                alt="AI-Driven Market Insights"
                className="mb-4"
              />
              <h3 className="text-xl font-[600] font-montserrat mb-2">
                AI-Driven Market Insights
              </h3>
              <p className="text-black font-[300] font-montserrat text-sm">
                Our AI-powered system provides real-time overviews to help you
                stay informed and make confident decisions. Minimize uncertainty
                and optimize your trades with data-backed insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseYourSay;