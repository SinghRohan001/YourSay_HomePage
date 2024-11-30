import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import rotate3 from "../assets/Trade sign1.svg";
import rotate2 from "../assets/circle1.svg";
import rotate1 from "../assets/Category.svg";
import WhyChooseYourSay from "../components/WhyChooseYourSay";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="lg:mb-14 md:mb-52">
        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="absolute lg:mt-20 mt-32 animate-[rotateAlternating_25s_linear_infinite] z-0 hidden md:block lg:block">
              <img
                src={rotate1}
                alt="Rotating background 3"
                className="lg:w-[100%] md:w-[96vw]"
              />
            </div>

            <div className="absolute lg:mt-32 mt-40 animate-[rotateAlternating2_25s_linear_infinite] z-0 hidden md:block lg:block">
              <img
                src={rotate3}
                alt="Rotating background 2"
                className="lg:w-[100%] md:w-[80vw]"
              />
            </div>

            <div className="absolute mt-52 animate-[rotateAlternating_25s_linear_infinite] z-0 hidden md:block lg:block">
              <img
                src={rotate2}
                alt="Rotating background 1"
                className="lg:w-[100%] md:w-[62vw]"
              />
            </div>
          </div>
        </div>

        <div className="flex relative justify-center items-start lg:h-screen mb-6">
          <div className="w-[100%] lg:w-[35%] md:w-[50%] mt-16 lg:mt-28 md:mt-20 flex flex-col justify-center">
            <h1 className="lg:text-5xl md:text-xl text-3xl lg:mt-0 md:mt-0 text-center font-montserrat font-[700] tracking-wider">
              Turn Your Opinions into Real Rewards!
            </h1>
            <p className="text-center text-gray-500 lg:mt-6 md:mt-2 mt-4 lg:text-[14px] md:text-xs text-sm lg:p-0 md:p-0 px-2 font-montserrat font-[400]">
              Welcome to YourSay, the platform where your opinions take center
              stage. Here, every 'yes' or 'no' is more than just a choice—it's
              an opportunity to win real rewards. Engage in exciting opinion
              trades and watch your insights pay off.
            </p>
            <div className="lg:mt-6 md:mt-3 mt-4 flex justify-center">
              <button
                type="button"
                className="text-white font-[500] font-montserrat bg-blue-600 hover:bg-blue-700 focus-within:ring-4 focus-within:ring-blue-800 border-blue-700 border-[1px] rounded-lg lg:text-lg md:text-md text-sm px-3 py-2 me-2 mb-2 cursor-pointer"
                onClick={() => window.open("https://trading.yoursay.live/", "_blank")}
              >
                Trade Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Card />
      </div>

      <div className="">
        <Card1 />
      </div>

      <div className="">
        <WhyChooseYourSay />
      </div>

      <div>
        <Card2 />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
