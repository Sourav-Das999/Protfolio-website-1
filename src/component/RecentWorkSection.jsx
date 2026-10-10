import React, { useState } from "react";
import { imageUrl } from "../utils/imageUrl";

const projectsData = [
  {
    id: 1,
    title: "Deloitte",
    description:
      "How Deloitte found freedom, flexibility, and rebrand success.",
    image: "work-image-1.png",
    link: "#",
  },
  {
    id: 2,
    title: "New Age",
    description: "Project was about precision and information...",
    image: "work-image-2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Sebastian",
    description: "Project was about precision and information...",
    image: "work-image-3.png",
    link: "#",
  },
];

const RecentWorkSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideOffset, setSlideOffset] = useState(0);

  const total = projectsData.length;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideOffset(-100);

    setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % total);
      setSlideOffset(0);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideOffset(100);

    setTimeout(() => {
      setStartIndex((prev) => (prev - 1 + total) % total);
      setSlideOffset(0);
      setIsAnimating(false);
    }, 400);
  };

  const visibleCards = [
    projectsData[(startIndex - 1 + total) % total],
    projectsData[startIndex % total],
    projectsData[(startIndex + 1) % total],
    projectsData[(startIndex + 2) % total],
    projectsData[(startIndex + 3) % total],
  ];

  return (
    <section className="bg-[#140C1C] text-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 font-['Sora',sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <span className="text-[11px] font-bold tracking-[2.5px] text-[#8b5cf6] uppercase block mb-3">
              MY RECENT WORK
            </span>

            {/* Exact Figma Heading Styling */}
            <h2
              className="text-3xl sm:text-4xl md:text-[45px] font-semibold tracking-[-0.9px] uppercase leading-[42px] sm:leading-[52px] md:leading-[54px] max-w-[442.66px]"
              style={{
                background:
                  "linear-gradient(90deg, #FFFFFF 50%, rgba(255, 255, 255, 0.4) 50%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              RECENT WORK FOR <br />
              MY CLIENTS!
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-gray-800 bg-[#140c1d] flex items-center justify-center text-gray-300 hover:border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-50"
              aria-label="Previous Project"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-gray-800 bg-[#140c1d] flex items-center justify-center text-gray-300 hover:border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-50"
              aria-label="Next Project"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Endless Circular Carousel Window (Mobile: 1 Card, Desktop: 3 Cards) */}
        <div className="w-full overflow-hidden">
          <div
            className={`flex gap-6 ${
              isAnimating ? "transition-transform duration-400 ease-out" : ""
            }`}
            style={{
              transform: `translateX(var(--slide-transform))`,
              "--slide-transform": `calc(-100% - 24px + ${slideOffset}%)`,
            }}
          >
            <style>{`
              @media (min-width: 768px) {
                div[style*="--slide-transform"] {
                  transform: translateX(calc(-33.333% - 8px + ${slideOffset / 3}%)) !important;
                }
              }
            `}</style>

            {visibleCards.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="w-full md:w-[calc(33.333%-16px)] shrink-0 bg-[#09040e] border border-[#1d1429] hover:border-[#8750F7]/40 rounded-3xl p-5 flex flex-col justify-between group transition-colors duration-300"
              >
                {/* Image */}
                <div className="w-full h-[250px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden mb-5 bg-[#140c1d]">
                  <img
                    src={imageUrl(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Bottom Info */}
                <div className="flex items-end justify-between pt-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-1">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.link}
                    className="w-10 h-10 rounded-full border border-gray-800 bg-[#140c1d] flex items-center justify-center text-white shrink-0 group-hover:bg-[#8750F7] group-hover:border-[#8750F7] transition-all duration-300 ml-3"
                  >
                    <svg
                      className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300"
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
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                startIndex === index ? "w-6 bg-[#8750F7]" : "w-2 bg-gray-700/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;
