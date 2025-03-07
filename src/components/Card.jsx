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
    title: "Your Price",
    subtitle: "Control Your Investment",
    description:
      "Set the price at which you enter trades, giving you complete control over your actions and decisions.",
  },
  {
    imgSrc: sbg,
    title: "Your Interest",
    subtitle: "Engage with What Matters",
    description:
      "From trending topics to niche interests, engage with the events and areas that you care about the most.",
  },
  {
    imgSrc: fno,
    title: "Your Investment",
    subtitle: "Flexibility in Commitment",
    description:
      "Decide how much you want to commit. You control your level of involvement and can trade with ease and flexibility.",
  },
  {
    imgSrc: stock,
    title: "Your Choice",
    subtitle: "Customize Your Category",
    description:
      "You have the freedom to choose not only how you participate but also which category excites you the most. Select your preferred category, set your price, and back an outcome that aligns with your passion.",
  },
  {
    imgSrc: comodity,
    title: "Your Insight",
    subtitle: "Informed Decisions with Detailed Insights",
    description:
      "Gain a detailed overview of each trade and learn before committing. Your knowledge shapes decisions—leverage insights to influence outcomes and make smarter trades",
  },
  {
    imgSrc: mf,
    title: "Your Terms",
    subtitle: "Set Your Own Rules",
    description:
      "Choose your own conditions—whether it's the price, quantity, or timing, you’re in charge of the terms that suit you best.",
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
    <div className="w-full flex flex-col justify-center relative">
      {/* Left Arrow */}
      <div
        className="absolute hidden lg:block md:block w-[70px] h-full"
      >
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
        className="w-full flex overflow-x-scroll  lg:px-12 md:px-12 hide-scrollbar scroll-smooth"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[70%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 mx-2"
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
      <div
        className="absolute hidden lg:block md:block right-0 w-[70px] h-full"
      >
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
