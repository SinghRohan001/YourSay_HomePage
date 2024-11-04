import React from "react";
import container from "../assets/Down.jpg";
// Import different images for each card
import ai from "../assets/ai.svg";
import megaEvents from "../assets/mega-events.svg";
import categoryCoverage from "../assets/category-coverage.svg";
function Card2() {
  const cards = [
    {
      id: 1,
      title: "AI-Powered Trading Evolution",
      description:
        "Revolutionize your trading experience with the power of AI. Get real-time insights, automated strategies, and AI-driven overviews to trade smarter and with greater confidence.",
      image: ai,  // Image for this card
    },
    {
      id: 2,
      title: "Mega Events for High-Stakes Rewards",
      description:
        "Participate in our thrilling 'Mega Events' for a chance to win big. With larger prize pools and exciting challenges across various categories, you can push your skills to new heights and aim for substantial rewards.",
      image: megaEvents,  // Image for this card
    },
    {
      id: 3,
      title: "Comprehensive Category Coverage",
      description:
        "Explore and trade in a wide range of categories. With expanded options, you can diversify your trades effortlessly, enhancing both your strategy and potential for success.",
      image: categoryCoverage,  // Image for this card
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
        <div className="mx-10">
          <h1 className="text-white  md:text-[30px] lg:text-[48px] font-montserrat font-[700] text-center px-10">
            YourSay: Empowering Your Trading Journey with Insight, Flexibility,
            and Success
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="bg-white rounded-lg h-full w-full lg:h-[357px] lg:w-[350px] shadow-lg p-6 pt-4 flex flex-col"
              >
                {/* Icon Placeholder - Using dynamic image for each card */}
                <div className="text-4xl mb-2  flex justify-between">
                  <img src={card.image} alt={`${card.title} icon`} />
                </div>
                <h3 className="text-xl text-[#101010] mb-2 font-montserrat font-[600]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#6A6A6A] font-montserrat font-[400] mb-4">
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