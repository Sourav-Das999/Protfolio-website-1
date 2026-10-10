import React from "react";
import { imageUrl } from "../utils/imageUrl";

const skillsData = [
  {
    id: 1,
    title: "Adobe After Effect",
    desc: "Adobe After Effects is a powerful software application used motion graphics.",
    percentage: "92%",
    progressWidth: "92%",
    iconSrc: "app-1.png",
  },
  {
    id: 2,
    title: "Final Cut Pro",
    desc: "Professional video editing software developed by Apple Inc., designed.",
    percentage: "80%",
    progressWidth: "80%",
    iconSrc: "app-2.png",
  },
  {
    id: 3,
    title: "iMovie Film",
    desc: "iMovie offers a range of powerful editing tools that allow users.",
    percentage: "85%",
    progressWidth: "85%",
    iconSrc: "app-3.png",
  },
  {
    id: 4,
    title: "Hit Films Express",
    desc: "HitFilm Express is a free video editing and visual effects software developed.",
    percentage: "99%",
    progressWidth: "99%",
    iconSrc: "app-4.png",
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-[#140C1C] text-white py-16 px-4 md:px-12 font-['Sora',sans-serif]">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            {/* Subtitle */}
            <span className="text-[11px] font-bold tracking-[2px] text-[#8b5cf6] uppercase block mb-3">
              MY RECENT WORK
            </span>

            {/* Gradient Heading with Figma CSS Style */}
            <h2
              className="text-3xl md:text-[45px] font-semibold leading-[1.2] tracking-[-0.9px] uppercase max-w-[510px]"
              style={{
                background:
                  "linear-gradient(90deg, #FFFFFF 50%, rgba(255, 255, 255, 0.4) 50%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MY MASTERING VIDEO EDITING SKILLS
            </h2>
          </div>

          {/* Learn More Button */}
          <div>
            <button
              className="flex items-center justify-center gap-2 text-white font-medium text-sm w-[179.33px] h-[49px] rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #8750F7 0%, #2A1454 51%, #8750F7 100%)",
                borderRadius: "9999px",
              }}
            >
              <span>Learn More</span>
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#05020a] border border-[#1a1329] hover:border-purple-800/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Logo & Title Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-[#130d1d] shrink-0">
                    {/* Software Image Placeholder */}
                    <img
                      src={imageUrl(skill.iconSrc)}
                      alt={skill.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-base text-white leading-tight">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed mb-8">
                  {skill.desc}
                </p>
              </div>

              {/* Progress Bar & Percentage */}
              <div>
                <div className="flex justify-end mb-2">
                  <span className="text-xs font-semibold text-gray-300">
                    {skill.percentage}
                  </span>
                </div>
                <div className="w-full bg-[#1e172e] h-[2px] rounded-full overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full"
                    style={{ width: skill.progressWidth }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
