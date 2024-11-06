import React from "react";
import Down from "../assets/Down.jpg";

import item from "../assets/Item.svg";
import item2 from "../assets/Item2.svg";
import item3 from "../assets/Item3.svg";

const Card1 = () => {
  return (
    <div className="w-full flex justify-center lg:mt-0">
      <div className="w-full">
        <div
          className="w-full flex justify-center mt-5 bg-no-repeat bg-fit h-[100%]"
          style={{
            backgroundImage: `url(${Down})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-center">
            <div className="mb-6 w-full text-center">
              <p className="text-3xl lg:text-6xl md:text-4xl sm:text-3xl font-bold text-white p-4">
                Its's easy to Start Playing with YourSay
              </p>
            </div>
            <div className="w-full flex justify-center mb-4">
              <div className=" rounded-l-full rounded-r-full px-6 py-3 mx-2 bg-white">
                <p className="font-[400] text-center text-md lg:text-xl md:text-lg">
                Trade Opinion on YourSay and win big!
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="lg:w-[65%] md:w-[70%] w-full p-4">
                <p className="text-center text-white font-[200] text-sm lg:text-lg md:text-sm">
                  Enter the world of Opinion Trading, where you predict
                  real-world events with a simple "yes" or "no." Just like
                  fantasy sports, your choices are based on live outcomes, and
                  your accuracy can earn you real rewards. Test your instincts
                  and win by trading on your opinions!
                </p>
              </div>
              <div></div>
            </div>

            <div className="flex lg:flex-row flex-col w-full justify-center mt-5 items-center">
              <div className="m-4">
                <img src={item} alt="" className="lg:w-[350px] "/>
              </div>

              <div className="m-4">
                <img src={item3} alt="" className="lg:w-[350px] "/>
              </div>

              <div className="m-4">
                <img src={item2} alt="" className="lg:w-[350px] "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
