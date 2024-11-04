import React from "react";
import Group from "../assets/Group.svg"
import Device from "../assets/device.svg"
import Switch from "../assets/switch.svg"
import Star from "../assets/star.svg"
import Background from "../assets/background.svg"


const WhyChooseYourSay = () => {
  return (
    <section className="bg-white py-6 bg-no-repeat bg-fit"
    style={{
      backgroundImage: `url(${Background})`,
      backgroundPosition: "top right",
    }}>
      <div className="  lg:mx-10 px-4">
        <div className="md:flex lg:flex justify-between  ">
          <h2 className="lg:text-[64px] md:text-[35px] text-2xl font-[600] text-[#101010] mb-8 font-montserrat mt-10">Why Choose YourSay</h2>
          <div className="flex justify-end items-center mb-8">
            <button className="bg-[#2E67F4] h-[52px] w-full font-[700] font-montserrat text-white py- px-6 rounded-lg mt-5">
              Start investing for FREE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="border border-[#E5E5E5] p-8 rounded-lg shadow-md">
            <img
              src={Group}
              alt="Flexibility and Control"
              className="mb-4"
            />
            <h3 className="text-xl font-[600] font-montserrat mb-2">
              Designed for Flexibility and Control
            </h3>
            <p className="text-black font-[300] font-montserrat text-sm">
              YourSay offers you the freedom to manage your trades with flexible
              exit options and profit booking. Trade on your terms and adjust as
              the market shifts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-[#E5E5E5] p-8 rounded-lg shadow-md">
            <img
              src={Device}
              alt="User-Friendly Accessibility"
              className="mb-4"
            />
            <h3 className="text-xl font-[600] font-montserrat mb-2">
              User-Friendly Accessibility
            </h3>
            <p className="text-black font-[300] font-montserrat text-sm">
              Our platform is designed to be intuitive and accessible. You have
              full control of your trading strategies, with the ability to exit
              or book profits at any time, ensuring you're always in charge.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-[#E5E5E5] p-8 rounded-lg shadow-md">
            <img
              src={Switch}
              alt="Adaptable Trading Options"
              className=" mb-4"
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
          <div className="border border-[#E5E5E5] p-8 rounded-lg shadow-md">
            <img
              src={Star}
              alt="AI-Driven Market Insights"
              className=" mb-4"
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
  );
};

export default WhyChooseYourSay;
