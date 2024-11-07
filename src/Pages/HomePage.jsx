import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import rotate3 from "../assets/Trade sign.svg";
import rotate2 from "../assets/Profiles.svg";
import rotate1 from "../assets/Category icon section.svg";
import WhyChooseYourSay from "../components/WhyChooseYourSay";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="mb-14">
        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="absolute mt-20 animate-[rotateAlternating_20s_linear_infinite] z-0 hidden lg:block">
              <img src={rotate1} alt="Rotating background 1" />
            </div>

            <div className="absolute mt-36 animate-[rotateAlternating2_20s_linear_infinite] z-0 hidden lg:block">
              <img src={rotate3} alt="Rotating background 2" />
            </div>

            <div className="absolute mt-52 animate-[rotateAlternating_20s_linear_infinite] z-0 hidden lg:block">
              <img src={rotate2} alt="Rotating background 3" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start lg:h-screen mb-6">
          <div className="w-[100%] lg:w-[35%] md:w-[60%] mt-20 lg:mt-20 md:mt-40 flex flex-col justify-center">
            <h1 className="lg:text-5xl md:text-5xl text-3xl lg:mt-0 md:mt-0 mt-6 text-center font-montserrat font-[700] tracking-wider">
              Turn Your Opinions into Real Rewards!
            </h1>
            <p className="text-center text-gray-500 mt-8 lg:text-md md:text-md text-sm font-montserrat font-[400]">
              Welcome to YourSay, the platform where your opinions take center
              stage. Here, every 'yes' or 'no' is more than just a choice—it's
              an opportunity to win real rewards. Engage in exciting opinion
              trades and watch your insights pay off.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="text-white font-[500] font-montserrat bg-blue-700 border-blue-700 border-[1px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg lg:text-lg md:text-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Coming Soon
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
