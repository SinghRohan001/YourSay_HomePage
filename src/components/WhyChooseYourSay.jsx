import React from "react";
import Group from "../assets/Group.svg";
import Device from "../assets/device.svg";
import Switch from "../assets/switch.svg";
import Star from "../assets/star.svg";
import Background from "../assets/background.svg";
import Background1 from "../assets/svg.png";
import { useNavigate } from "react-router-dom";

// Feature card component to reduce repetition
const FeatureCard = ({ image, imageAlt, title, description }) => (
  <div className="border border-[#E5E5E5] p-8 rounded-lg shadow-md bg-white">
    <img src={image} alt={imageAlt} className="mb-4" />
    <h3 className="text-xl font-[600] font-montserrat mb-2">{title}</h3>
    <p className="text-black font-[300] font-montserrat text-sm">
      {description}
    </p>
  </div>
);

const WhyChooseYourSay = () => {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate("/download");
  };

  // Features data to make the component more maintainable
  const features = [
    {
      image: Group,
      imageAlt: "Build Your Ultimate Fantasy Team",
      title: "Build Your Ultimate Fantasy Team",
      description:
        "Select top-performing players, balance your squad, and strategize to maximize your points. Compete in daily, weekly, and mega contests to showcase your skills and win big.",
    },
    {
      image: Device,
      imageAlt: "Real-Time Match Insights & Analytics",
      title: "Real-Time Match Insights & Analytics",
      description:
        "Stay ahead with live match updates, in-depth player statistics, and expert predictions. Use data-driven insights to make smart decisions and gain an edge over the competition.",
    },
    {
      image: Switch,
      imageAlt: "Compete & Win Exciting Rewards",
      title: "Compete & Win Exciting Rewards",
      description:
        "Join competitive leagues, challenge your friends, and climb the leaderboards. Win cash prizes, exclusive bonuses, and special rewards based on your fantasy cricket expertise.",
    },
    {
      image: Star,
      imageAlt: "Easy, Secure & Engaging Gameplay",
      title: "Easy, Secure & Engaging Gameplay",
      description:
        "Our user-friendly platform ensures a smooth experience for both beginners and seasoned players. With secure transactions, fair play policies, and thrilling gameplay, YourSay is the ultimate destination for fantasy cricket lovers.",
    },
  ];

  return (
    <div className="relative">
      {/* Background images with proper alt text */}
      <div
        className="absolute hidden lg:block md:block top-0 right-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "top right",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div
        className="absolute hidden lg:block md:block top-0 left-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundPosition: "top left",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Content section */}
      <section className="relative z-10 bg-transparent">
        <div className="lg:mx-10 px-4 pb-4">
          <div className="flex justify-between items-center lg:pt-12 md:pt-2 pt-1">
            <h2 className="xl:text-[64px] font-bold lg:text-[50px] md:text-[35px] text-lg text-[#101010] md:mb-8 lg:mb-8 mb-4 font-montserrat">
              Why Choose YourSay
            </h2>
            <div className="flex justify-end items-center md:mb-8 lg:mb-8 mb-4">
              <button
                className="bg-[#2E67F4] lg:h-[52px] hover:bg-blue-700 w-full md:w-auto lg:text-[16px] md:text-[16px] text-[8px] font-[700] font-montserrat focus-within:ring-2 focus-within:ring-blue-800 text-white md:px-6 lg:py-0 md:py-2 lg:px-6 px-2 py-2 rounded-lg"
                onClick={handleDownloadClick}
              >
                Start investing for FREE
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                imageAlt={feature.imageAlt}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseYourSay;
