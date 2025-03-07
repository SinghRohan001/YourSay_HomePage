import React, { useState } from "react";
import Section from "../assets/Section.png";

export default function EasyToStart() {
  return (
    <div className="relative w-full min-h-screen">
      <img
        src={Section}
        className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0"
        alt="Background"
      />
      
      <div className="relative w-full min-h-screen p-4 md:p-8 lg:p-16 flex flex-col">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-[800] font-montserrat text-white leading-tight">
          It's Easy to Start Playing with YourSay
        </h1>
        
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mt-4 lg:mt-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center h-full space-y-4 lg:space-y-6 mb-8 lg:mb-0 pr-0 lg:pr-4">
            <div className="flex flex-col w-full justify-start font-montserrat">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-[800] font-montserrat text-white">
                Play. Predict. Conquer.
              </h1>
              <p className="text-base md:text-2xl lg:text-3xl text-white mt-2 lg:mt-4 leading-tight">
                Turn your instincts into victories—whether it's fantasy or
                opinion-based play.
                <br className="hidden sm:block" />
                Analyze trends, trust your strategy, and make bold decisions.
                <br className="hidden sm:block" />
                Stay ahead by understanding the game, weighing possibilities,
                and taking calculated risks.
                <br className="hidden sm:block" />
                Success favors the informed—sharpen your knowledge and step up
                with confidence. Engage, predict, and win with YourSay.
              </p>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[650px] max-w-[620px]">
              {/* White circles background effect */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 border-4 border-white/20 rounded-full -top-8 sm:-top-12 -right-8 sm:-right-12"></div>
                <div className="absolute w-32 sm:w-52 lg:w-80 h-32 sm:h-52 lg:h-80 border-4 border-white/20 rounded-full -top-6 sm:-top-8 -right-6 sm:-right-8"></div>
              </div>
              
              {/* Phone mockup */}
              <div className="w-full h-full rounded-3xl p-2">
                {/* Phone content */}
                <div className="w-64 h-64 md:w-96 md:h-96 lg:w-full lg:h-full rounded-2xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dcm2nozgx/image/upload/v1741328897/White_frame_i3dvxc.gif"
                    alt="App interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}