import React, { useEffect, useRef } from "react";
import Scroll from "../assets/Scroll.png";

const TradingJourney = () => {
  // Refs for the sections we want to observe
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  // Data for all three cards
  const cards = [
    {
      title: "SOOJH",
      titleHindi: "(सूझ)",
      subtitle: "AWARENESS & INSIGHT",
      content:
        "Stay ahead with real-time player stats, pitch reports, and match conditions. Get expert-backed insights to enhance your awareness for smart team selection. ",
    },
    {
      title: "BOOJH",
      titleHindi: "(बूझ)",
      subtitle: "ANALYSIS & STRATEGY",
      content:
        "Sharpen your judgment with smart data analytics, past performance trends, and opposition analysis. Use strategic planning to create a competitive fantasy team.",
    },
    {
      title: "SAMAJH",
      titleHindi: "(समझ)",
      subtitle: "CLARITY & DECISION-MAKING",
      content:
        "Simplify player selection with well-structured comparisons and probability-based suggestions. Gain a deeper understanding of match dynamics to make confident choices.",
    },
  ];

  useEffect(() => {
    // Initialize card refs array
    cardRefs.current = cardRefs.current.slice(0, cards.length);

    // Options for the observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    // Callback for observer
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when element is visible
          entry.target.classList.add("animate-in");
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    };

    // Create observer instance
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe heading
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    // Observe cards container
    if (cardsContainerRef.current) {
      observer.observe(cardsContainerRef.current);
    }

    // Observe each card
    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        observer.observe(cardRef);
      }
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full mx-auto px-4 py-8 overflow-hidden">
      {/* Main Heading with animation */}
      <h1
        ref={headingRef}
        className="text-center text-blue-500  text-xl md:text-4xl lg:text-6xl font-bold mb-12 leading-tight opacity-0 translate-y-10 transition-all duration-1000"
      >
        YourSay: Empowering Your Fantasy Cricket Journey
        <br />
        with Insight, Strategy, and Winning Choices
      </h1>

      {/* Cards Container with animation */}
      <div
        ref={cardsContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20 lg:py-8 opacity-0 transition-all duration-1000"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative opacity-0 transition-all duration-1000"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Single scroll image for entire card */}
            <div className="relative overflow-hidden">
              {/* Image with animation from bottom to top */}
              <div
                className="translate-y-full transition-transform duration-1000"
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <img src={Scroll} alt="Scroll background" className="w-full" />
              </div>

              {/* Content positioned absolutely on the scroll with animation from top to bottom */}
              <div
                className="absolute inset-0 flex flex-col -translate-y-full transition-transform duration-1000"
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                {/* Title Section - Top 20% */}
                <div className="flex-none h-1/5 flex items-center justify-center">
                  <h3 className="text-white lg:text-xl font-bold">
                    {card.title}{" "}
                    <span className="lg:text-sm">{card.titleHindi}</span>
                  </h3>
                </div>

                {/* Subtitle Section - Next 15% */}
                <div className="flex-none h-1/6 flex items-center justify-center">
                  <h4 className="text-white text-sm lg:text-md font-bold">
                    {card.subtitle}
                  </h4>
                </div>

                {/* Content Section - Remaining space */}
                <div className="flex-grow flex px-12">
                  <p className="text-white text-sm lg:text-lg font-outfit text-center">
                    {card.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add CSS for the animation-in class
const animationCSS = `
.animate-in {
  opacity: 1 !important;
  transform: translate(0, 0) !important;
}

.animate-in > div > div {
  transform: translate(0, 0) !important;
}
`;

// Add the CSS to the document head
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(animationCSS));
  document.head.appendChild(style);
}

export default TradingJourney;
