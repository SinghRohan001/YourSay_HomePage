import React from "react";
import container from "../assets/Down.jpg";
// Import different images for each card
import ai from "../assets/second.svg";
import megaEvents from "../assets/third.svg";
import categoryCoverage from "../assets/currency.webp (1).svg";

function Card2() {
  const cards = [
    {
      id: 1,
      title: "Revolutionizing Trading with AI Intelligence",
      description:
        "Revolutionize your trading experience with the power of AI. Get real-time insights, automated strategies, and AI-driven overviews to trade smarter and with greater confidence.",
      image: ai,
    },
    {
      id: 2,
      title: "Mega Events for High-Stakes Rewards",
      description:
        "Participate in our thrilling 'Mega Events' for a chance to win big. With larger prize pools and exciting challenges across various categories, you can push your skills to new heights and aim for substantial rewards.",
      image: megaEvents,
    },
    {
      id: 3,
      title: "Comprehensive Category Coverage",
      description:
        "Explore and trade in a wide range of categories. With expanded options, you can diversify your trades effortlessly, enhancing both your strategy and potential for success.",
      image: categoryCoverage,
    },
  ];

  return (
    <div
      className="bg-slate-300 h-full lg:h-[660px] bg-no-repeat bg-fit"
      style={{
        backgroundImage: `url(${container})`,
        backgroundSize: "cover",
      }}
    >
      <div className="pt-4 lg:pt-12">
        <div className="md:mx-10 lg:mx-10">
          <h1 className="text-white text-[22px] md:text-[30px] xl:text-[52px] lg:text-[36px] font-montserrat font-[700] text-center md:px-10 lg:px-10">
            YourSay: Empowering Your Trading Journey with Insight, Flexibility
            and Success
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center md:mt-2 lg:mt-8">
        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4 lg:p-0 xl:gap-26 gap-6">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="bg-white rounded-lg h-full w-full xl:h-[357px] xl:w-[420px] lg:h-[350px] lg:w-[300px] shadow-lg p-6 flex flex-col"
              >
                {/* Icon Placeholder - Using dynamic image for each card */}
                <div className="text-4xl mb-2 w-full flex justify-between">
                  <img src={card.image} alt={`${card.title} icon`} />
                </div>
                <h3 className="text-xl text-[#101010] mb-2 w-full font-montserrat font-[600]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#6A6A6A] font-montserrat w-full font-[400] lg:mb-4 mb-0">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
