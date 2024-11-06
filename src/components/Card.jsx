import React from "react";
import currenct from "../assets/currency.webp.svg";
import sbg from "../assets/SGBs.webp.svg";
import fno from "../assets/F&O.webp.svg";
import stock from "../assets/stock.svg";
import comodity from "../assets/comodities.svg";
import mf from "../assets/MF.svg";

const Card = () => {
  return (
    <div className="w-full flex flex-col justify-center ">
      {/* Container for the cards with horizontal scroll enabled */}
      <div className="w-full flex overflow-x-scroll hide-scrollbar">
        {/* First card */}
        <div className="w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4">
          <div className="mb-4">
            <img className="w-25" src={currenct} alt="" />
          </div>
          <div className="font-montserrat">
            <p className="lg:text-2xl md:text-2xl text-lg font-bold mb-2">
              Your Price
            </p>
            <p className="lg:text-[18px] md:text-xl text-md font-[700]">
              Control Your Investment
            </p>
            <p className="lg:text-md md:text-sm text-xs font-[400] lg:mb-4 md:mb-4 mb-2">
              Set the price at which you enter trades, giving you complete
              control over your actions and decisions.
            </p>
          </div>
        </div>

        {/* Second card */}
        <div className="w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4">
          <div className="mb-4">
            <img className="w-25" src={sbg} alt="" />
          </div>
          <div className="font-montserrat">
            <p className="lg:text-2xl md:text-2xl text-lg font-bold mb-2">
              Your Interest
            </p>
            <p className="lg:text-[18px] md:text-xl text-md font-[700]">
              Engage with What Matters
            </p>
            <p className="lg:text-sm md:text-sm text-xs font-[400] lg:mb-4 md:mb-4 mb-2">
              From trending topics to niche interests, engage with the events
              and areas that you care about the most.
            </p>
          </div>
        </div>

        {/* Third card */}
        <div className="w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4">
          <div className="lg:mb-4 md:mb-4 mb-2">
            <img className="w-25" src={fno} alt="" />
          </div>
          <div className="font-montserrat">
            <p className="lg:text-2xl md:text-2xl text-lg font-bold mb-2">
              Your Investment
            </p>
            <p className="lg:text-[18px] md:text-xl text-md font-[700]">
              Flexibility in Commitment
            </p>
            <p className="lg:text-sm md:text-sm text-xs font-[400] lg:mb-4 md:mb-4 mb-2">
              Decide how much you want to commit. You control your level of
              involvement and can trade with ease and flexibility.{" "}
            </p>
          </div>
        </div>

        {/* Forth card */}
        <div className="w-full sm:w-1/2 lg:w-1/4  md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4">
          <div className="mb-4 w-full">
            <img className="w-25" src={stock} alt="" />
          </div>
          <div className="font-montserrat">
            <p className="lg:text-2xl md:text-2xl text-lg font-bold mb-2">
              Your Choice
            </p>
            <p className="lg:text-[18px] md:text-xl text-md font-[700]">
              Customize Your Category
            </p>
            <p className="lg:text-sm md:text-sm text-xs font-[400] lg:mb-4 md:mb-4 mb-2">
              You have the freedom to choose not only how you participate but
              also which category excites you the most. Select your preferred
              category, set your price, and back an outcome that aligns with
              your passion.
            </p>
          </div>
        </div>

        {/* Fifth card */}
        <div className="w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4">
          <div className="mb-4">
            <img className="w-25" src={comodity} alt="" />
          </div>
          <div className="font-montserrat">
            <p className="lg:text-2xl md:text-2xl text-lg font-bold mb-2">
              Your Insight
            </p>
            <p className="lg:text-[18px] md:text-xl text-md font-[700]">
              Informed Decisions with Detailed Insights
            </p>
            <p className="lg:text-sm md:text-sm text-xs font-[200] lg:mb-4 md:mb-4 mb-2">
              Gain a detailed overview of each trade and learn before
              committing. Your knowledge shapes decisions—leverage insights to
              influence outcomes and make smarter trades.{" "}
            </p>
          </div>
        </div>

        {/* Sixth card */}
        <div className="w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 
        py-2 ml-4">
          <div className="mb-4">
            <img className="w-25" src={mf} alt="" />
          </div>
          <div className="font-montserrat">
            <p className="lg:text-2xl md:text-2xl text-lg font-bold mb-2">
              Your Terms
            </p>
            <p className="lg:text-[18px] md:text-xl text-md font-[700]">
              Set Your Own Rules
            </p>
            <p className="lg:text-sm md:text-sm text-xs font-[200] lg:mb-4 md:mb-4 mb-2">
              Choose your own conditions—whether it's the price, quantity, or
              timing, you’re in charge of the terms that suit you best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
