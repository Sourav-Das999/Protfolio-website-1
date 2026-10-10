import React, { useState } from "react";
import { imageUrl } from "../utils/imageUrl";

// Sample data for Experiences, Education, and Awards
const backgroundData = {
  Experiences: [
    {
      id: 1,
      title: "SENIOR PRODUCT DESIGNER",
      company: "VIRTUSLAB",
      date: "2022 - 2023",
      description:
        "I'm winner of the world's most prestigious web design that has more-or-less normal awards in the fields.",
      iconSrc: "h4-work-1.png",
    },
    {
      id: 2,
      title: "SENIOR PRODUCT DESIGNER",
      company: "SEMIFLAT STUDIO",
      date: "2020 - 2023",
      description:
        "I'm winner of the world's most prestigious web design that has more-or-less normal awards in the fields.",
      iconSrc: "h4-work-2.png",
    },
    {
      id: 3,
      title: "SENIOR USER INTERFACE DESIGNER",
      company: "AUTENTIKA",
      date: "2018 - 2020",
      description:
        "I'm winner of the world's most prestigious web design that has more-or-less normal awards in the fields.",
      iconSrc: "h4-work-3.png",
    },
  ],
  Education: [
    {
      id: 1,
      title: "HONOURS IN ENGLISH LITERATURE",
      company: "TONGI GOVT COLLEGE",
      date: "2024 - PRESENT",
      description:
        "Studying core English literature, language, and critical analysis under National University.",
      icon: (
        <svg
          className="w-6 h-6 text-[#8750F7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "FRONT-END WEB DEVELOPMENT",
      company: "SIMEC INSTITUTE / NSDA",
      date: "2024",
      description:
        "Completed 6-month professional front-end web development certification program with NSDA assessment.",
      icon: (
        <svg
          className="w-6 h-6 text-[#8750F7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
  ],
  Awards: [
    {
      id: 1,
      title: "BEST WEB DESIGNER AWARD",
      company: "DESIGN EXCELLENCE",
      date: "2023",
      description:
        "Awarded for outstanding UI/UX design and responsive front-end implementation.",
      icon: (
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
  ],
};

const BackgroundSection = () => {
  const [activeTab, setActiveTab] = useState("Experiences");

  return (
    <section className="relative bg-[#140C1C] text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 font-['Sora',sans-serif] overflow-hidden">
      {/* Radial Purple Glow Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8750f7]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        {/* Subtitle */}
        <span className="text-[11px] font-bold tracking-[2.5px] text-[#8b5cf6] uppercase block mb-3 text-center">
          BEHIND THE PIXELS
        </span>

        {/* Gradient Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-[45px] font-semibold tracking-[-0.9px] uppercase leading-tight md:leading-[54px] text-center mb-8 max-w-[600px]"
          style={{
            background:
              "linear-gradient(90deg, #FFFFFF 50%, rgba(255, 255, 255, 0.4) 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          MY BACKGROUND AND <br />
          ACHIEVEMENTS
        </h2>

        {/* Tab Switcher Button */}
        <div className="bg-[#8750F7] border border-[#8750F7] p-1.5 rounded-full flex items-center gap-1 mb-12 sm:mb-16">
          {["Experiences", "Education", "Awards"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-[#140C1C] text-white shadow-lg shadow-[#140C1C]/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main List Box Container */}
        <div className="w-full bg-[#140c1d]/60 border border-[#1d1429] rounded-3xl p-6 sm:p-8 md:p-10 divide-y divide-[#1d1429] shadow-2xl backdrop-blur-sm">
          {backgroundData[activeTab]?.map((item) => (
            <div
              key={item.id}
              className="py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:bg-[#140c1d]/30 transition-all duration-300 rounded-2xl px-2 sm:px-4"
            >
              {/* Left Side: Icon + Details */}
              <div className="flex items-start gap-4 sm:gap-6 max-w-2xl">
                {/* Icon Box (Renders image if iconSrc exists, otherwise renders SVG icon) */}
                <div>
                  {item.iconSrc ? (
                    <img
                      src={imageUrl(item.iconSrc)}
                      alt={item.company}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    item.icon
                  )}
                </div>

                {/* Info Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-bold tracking-[1.5px] text-[#8b5cf6] uppercase block mb-3">
                    {item.company}
                  </span>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Date Badge */}
              <div className="flex items-center gap-2 text-[20px] sm:text-sm text-white/60 px-4 py-2 rounded-xl shrink-0 self-start md:self-start">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0.3125C4.97396 0.130209 4.86979 0.026041 4.6875 0C4.50521 0.026041 4.40104 0.130209 4.375 0.3125V2.5H2.5C1.79688 2.52604 1.21094 2.77344 0.742188 3.24219C0.273438 3.71094 0.0260417 4.29688 0 5V6.875V7.5V17.5C0.0260417 18.2031 0.273438 18.7891 0.742188 19.2578C1.21094 19.7266 1.79688 19.974 2.5 20H15C15.7031 19.974 16.2891 19.7266 16.7578 19.2578C17.2266 18.7891 17.474 18.2031 17.5 17.5V7.5V6.875V5C17.474 4.29688 17.2266 3.71094 16.7578 3.24219C16.2891 2.77344 15.7031 2.52604 15 2.5H13.125V0.3125C13.099 0.130209 12.9948 0.026041 12.8125 0C12.6302 0.026041 12.526 0.130209 12.5 0.3125V2.5H5V0.3125ZM0.625 7.5H16.875V17.5C16.849 18.0208 16.6667 18.4635 16.3281 18.8281C15.9635 19.1667 15.5208 19.349 15 19.375H2.5C1.97917 19.349 1.53646 19.1667 1.17188 18.8281C0.833333 18.4635 0.651042 18.0208 0.625 17.5V7.5ZM4.375 3.125V4.6875C4.40104 4.86979 4.50521 4.97396 4.6875 5C4.86979 4.97396 4.97396 4.86979 5 4.6875V3.125H12.5V4.6875C12.526 4.86979 12.6302 4.97396 12.8125 5C12.9948 4.97396 13.099 4.86979 13.125 4.6875V3.125H15C15.5208 3.15104 15.9635 3.33333 16.3281 3.67188C16.6667 4.03646 16.849 4.47917 16.875 5V6.875H0.625V5C0.651042 4.47917 0.833333 4.03646 1.17188 3.67188C1.53646 3.33333 1.97917 3.15104 2.5 3.125H4.375ZM13.0469 11.1719C13.151 11.0156 13.151 10.8594 13.0469 10.7031C12.8906 10.599 12.7344 10.599 12.5781 10.7031L8.125 15.1953L5.54688 12.5781C5.39062 12.474 5.23438 12.474 5.07812 12.5781C4.97396 12.7344 4.97396 12.8906 5.07812 13.0469L7.89062 15.8594C8.04688 15.9635 8.20312 15.9635 8.35938 15.8594L13.0469 11.1719Z"
                    fill="#8750F7"
                  />
                </svg>

                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
