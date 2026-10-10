import React from "react";
import { imageUrl } from "../utils/imageUrl";

const AboutSection = () => {
  return (
    <section className="bg-[#0b0713] text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 font-['Sora',sans-serif]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Left Side: Profile Image */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full max-w-[420px] lg:max-w-none h-[380px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden bg-[#130d1d] border border-[#1a1329] shadow-2xl">
            <img
              src={imageUrl("about-me.png")}
              alt="Digital Marketer"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Subtitle */}
          <span className="text-[11px] font-bold tracking-[2px] text-[#8b5cf6] uppercase block mb-3">
            BEHIND THE PIXELS
          </span>

          {/* Gradient Title */}
          <h2
            className="text-2xl sm:text-4xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.8px] uppercase mb-5"
            style={{
              background:
                "linear-gradient(90deg, #FFFFFF 48%, rgba(255, 255, 255, 0.4) 48%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PASSIONATE ON DIGITAL MARKETER FOCUSED ON DRIVING RESULTS.
          </h2>

          {/* Description Paragraph */}
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
            This encompasses a variety of strategies, including search engine
            optimization (SEO), content marketing, social media marketing, email
            marketing.
          </p>

          {/* Stats Box (30+ Years, 100+ Projects, 300+ Successful) */}
          <div className="bg-[#05020a] border border-[#1a1329] rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mb-8">
            {/* Stat 1 */}
            <div className="flex flex-col sm:border-r border-[#1a1329] sm:pr-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#8750F7] mb-1">
                30+
              </h3>
              <p className="text-gray-400 text-xs font-medium leading-snug">
                Years of <br className="hidden sm:block" /> Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col sm:border-r border-[#1a1329] sm:px-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#8750F7] mb-1">
                100+
              </h3>
              <p className="text-gray-400 text-xs font-medium leading-snug">
                Project <br className="hidden sm:block" /> Completed
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col sm:pl-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#8750F7] mb-1">
                300+
              </h3>
              <p className="text-gray-400 text-xs font-medium leading-snug">
                Successful <br className="hidden sm:block" /> Project
              </p>
            </div>
          </div>

          {/* Learn More Button with exact Figma Background CSS */}
          <div>
            <button
              className="flex items-center justify-center gap-2 text-white font-medium text-sm w-[179.33px] h-[49px] rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg shadow-purple-900/20"
              style={{
                background:
                  "linear-gradient(90deg, #8750F7 0%, #2A1454 51%, #8750F7 100%)",
                borderRadius: "9999px",
              }}
            >
              <span>Learn More</span>
              {/* Arrow Icon */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
