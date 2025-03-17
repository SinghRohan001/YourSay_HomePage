import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import rotate3 from "../assets/Profiles 3.png";
import rotate2 from "../assets/Profiles 2.png";
import rotate1 from "../assets/Profiles 4.png";
import WhyChooseYourSay from "../components/WhyChooseYourSay";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";
import Playwithus from "@/components/Playwithus";
import TradingJourney from "@/components/TradingJourney";

const HomePage = () => {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate("/download");
  };

  return (
    <div className="w-full">
      <Navbar />
      <div className="xl:mb-[450px] lg:mb-[280px] w-full md:mb-52">
        <div className="relative">
          <div className="flex justify-center items-center">
            {/* Rotating background images */}
            <div className="absolute xl:mt-20 lg:mt-10 mt-32 animate-[rotateAlternating_25s_linear_infinite] z-0 hidden md:block lg:block">
              <img
                src={rotate1}
                alt="Rotating background 3"
                className="lg:max-w-[1050px]  xl:max-w-[1400px] md:max-w-[764px]"
              />
            </div>
            <div className="absolute xl:mt-32 lg:mt-8 mt-40 animate-[rotateAlternating2_25s_linear_infinite] z-0 hidden md:block lg:block">
              <img
                src={rotate3}
                alt="Rotating background 2"
                className="lg:max-w-[890px] xl:max-w-[1120px] md:max-w-[620px]"
              />
            </div>
            <div className="absolute xl:mt-52 lg:mt-16 mt-52 animate-[rotateAlternating_25s_linear_infinite] z-0 hidden md:block lg:block ">
              <img
                src={rotate2}
                alt="Rotating background 1"
                className="lg:max-w-[700px] xl:max-w-[810px] md:max-w-[460px]"
              />
            </div>
          </div>
        </div>

        <div className="flex relative justify-center w-full items-start mb-6">
          <div className="w-[100%] lg:w-[51%] xl:w-[38%] md:w-[55%] 2xl:w-[25%] 3xl:w-[13%] mt-16 lg:mt-24 xl:mt-28 md:mt-20 flex flex-col justify-center">
            <h1 className="lg:text-2xl xl:text-3xl md:text-lg 2xl:text-2xl w-full text-3xl lg:mt-0 md:mt-0 text-center font-montserrat font-[700] tracking-wider">
              YourSay: The Ultimate Fantasy Sports Platform
            </h1>
            <div className="">
              <p className="text-center text-gray-500 lg:mt-4 xl:mt-6 md:mt-2 mt-4 lg:text-[8px] xl:text-[14px] md:text-[7px] text-sm lg:px-16 xl:px-10 md:px-16 px-2 font-montserrat font-[400]">
                YourSay is a next-gen fantasy sports app where your knowledge
                and strategy earn real rewards. Compete in fantasy cricket and
                other sports, challenge friends, and climb leaderboards with
                real-time updates and expert insights. Experience the thrill of
                smarter plays and big wins with YourSay!
              </p>
            </div>

            <div className="lg:mt-4 xl:mt-6 md:mt-3 mt-4 flex justify-center">
              <button
                type="button"
                className="text-white  font-montserrat font-medium bg-blue-600 hover:bg-blue-700 focus-within:ring-4 focus-within:ring-blue-800 border-blue-700 border-[1px] rounded-lg lg:text-xs xl:text-lg md:text-xs text-sm md:px-1 md:py-1 lg:px-2 lg:py-2 px-2 py-2 me-2 mb-2 cursor-pointer"
                onClick={handleDownloadClick}
              >
                Download App Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Card />
      </div>

      <div className="">
        <Playwithus />
      </div>
      <div className="">
        <TradingJourney />
      </div>

      <div className="">
        <WhyChooseYourSay />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
