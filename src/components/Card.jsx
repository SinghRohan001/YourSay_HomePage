import React from "react";
import currenct from "../assets/currency.webp.svg";
import sbg from "../assets/SGBs.webp.svg";
import fno from "../assets/F&O.webp.svg";
import stock from "../assets/stock.svg";
import comodity from "../assets/comodities.svg";
import mf from "../assets/MF.svg";

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
  return (
    <div className="w-full flex flex-col justify-center">
      {/* Container for the cards with horizontal scroll enabled */}
      <div className="w-full flex overflow-x-scroll hide-scrollbar">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[70%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4"
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
    </div>
  );
};

export default Card;
