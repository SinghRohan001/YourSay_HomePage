import React, { useRef } from "react";
import currenct from "../assets/currency.webp.svg";
import sbg from "../assets/SGBs.webp.svg";
import fno from "../assets/F&O.webp.svg";
import stock from "../assets/stock.svg";
import comodity from "../assets/comodities.svg";
import mf from "../assets/MF.svg";
import arrow from "../assets/arrow1.svg";
import arrow1 from "../assets/arrow2.svg";

const cardData = [
  {
    imgSrc: currenct,
    title: "Your Choice",
    subtitle: "Pick Your Game, Play Your Way",
    description:
      "Choose the contests and formats that match your cricket passion—whether it's classic fantasy, daily challenges, or head-to-head matchups. Play where you have the edge!",
  },
  {
    imgSrc: stock,
    title: "Your Strategy",
    subtitle: "Plan, Predict, and Play Smart",
    description:
      "Success in fantasy cricket isn’t just about luck—it’s about smart decisions. Whether you're selecting your dream XI or making transfers, every move shapes your victory",
  },

  {
    imgSrc: fno,
    title: "Your Commitment",
    subtitle: "Play at Your Own Pace",
    description:
      "Whether you prefer quick fantasy matchups or long-term trading strategies, you decide how much time and effort to invest. Play flexibly, on your terms.",
  },
  {
    imgSrc: sbg,
    title: "Your Investment",
    subtitle: "Control Your Game, Set Your Stake",
    description:
      "Decide how much you want to commit—be it in fantasy leagues. Manage your risks, maximize your rewards, and play with confidence.",
  },

  {
    imgSrc: comodity,
    title: "Your Insight",
    subtitle: "Stay Ahead with Smart Decisions",
    description:
      "Use real-time data, expert analysis, and performance trends to make the best calls. In fantasy knowledge is your greatest advantage.",
  },
  {
    imgSrc: mf,
    title: "Your Terms",
    subtitle: "Set the Rules That Work for You",
    description:
      "From selecting your fantasy squad to defining your trade conditions, you call the shots. Customize your experience and play the way that suits you best.",
  },
];

const Card = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col bg-[#F6F6F6] justify-center relative lg:py-20 py-8  ">
      {/* Left Arrow */}
      <div className="absolute hidden lg:block md:block w-[70px] h-full">
        <button
          className="absolute left-3 top-1/2 transform bg-white -translate-y-1/2  shadow-lg rounded-full p-2 z-10"
          onClick={scrollLeft}
        >
          <img src={arrow} className="" />
        </button>
      </div>

      {/* Card Container */}
      <div
        ref={scrollRef}
        className="w-full flex overflow-x-scroll lg:ml-8 lg:px-12 md:px-12 hide-scrollbar scroll-smooth"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 bg-white md:min-w-[33.33%] lg:min-w-[25%] min-w-[70%] border rounded-xl shadow-lg p-4 lg:py-6 md:py-6 py-2 mx-2 "
          >
            <div className="mb-4">
              <img className="w-25" src={card.imgSrc} alt={card.title} />
            </div>
            <div className="font-montserrat">
              <p className="lg:text-2xl md:text-2xl text-lg font-bold mb-2">
                {card.title}
              </p>
              <p className="lg:text-[18px] md:text-xl text-md font-[700]">
                {card.subtitle}
              </p>
              <p className="lg:text-md md:text-sm text-xs font-[400] lg:mb-4 md:mb-4 mb-2">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <div className="absolute hidden lg:block md:block right-0 w-[70px] h-full">
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
          onClick={scrollRight}
        >
          <img src={arrow1} className="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
