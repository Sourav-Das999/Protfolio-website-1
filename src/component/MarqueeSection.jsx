import React from "react";
import { motion } from "framer-motion";

const keywordsTop = [
  "GRAPHIC",
  "DESIGN",
  "MOTION",
  "DEVELOPMENT",
  "DESIGN",
  "DEVELOPMENT",
  "WEBFLOW",
  "GRAPHIC",
];

const keywordsBottom = [
  "GRAPHIC",
  "WEBFLOW",
  "DEVELOPMENT",
  "DESIGN",
  "DEVELOPMENT",
  "MOTION",
  "WEBFLOW",
  "GRAPHIC",
];

const MarqueeSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full bg-[#140C1C] py-10 sm:py-16 md:py-20 overflow-hidden flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 font-['Sora',sans-serif]"
    >
      {/* 1. Top Purple Marquee Strip (Tilted Clockwise) */}
      <div className="w-[130%] sm:w-[120%] bg-[#8750F7] text-white py-3 sm:py-5 md:py-7 transform rotate-[2deg] sm:rotate-[2.5deg] shadow-2xl z-10 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee-ltr flex items-center shrink-0">
          {[...keywordsTop, ...keywordsTop].map((word, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-wider uppercase px-3 sm:px-5 md:px-7">
                {word}
              </span>
              <span className="text-sm sm:text-lg md:text-2xl opacity-80 select-none">
                ✳
              </span>
            </div>
          ))}
        </div>
        <div
          className="animate-marquee-ltr flex items-center shrink-0"
          aria-hidden="true"
        >
          {[...keywordsTop, ...keywordsTop].map((word, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-wider uppercase px-3 sm:px-5 md:px-7">
                {word}
              </span>
              <span className="text-sm sm:text-lg md:text-2xl opacity-80 select-none">
                ✳
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Bottom Dark Marquee Strip (Tilted Counter-Clockwise) */}
      <div className="w-[130%] sm:w-[120%] bg-white/5 text-white py-3 sm:py-5 md:py-7 transform -rotate-[2deg] sm:-rotate-[2.5deg] border-y border-[#2a1745] shadow-2xl z-0 -mt-6 sm:-mt-8 md:-mt-10 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee-rtl flex items-center shrink-0">
          {[...keywordsBottom, ...keywordsBottom].map((word, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-wider uppercase px-3 sm:px-5 md:px-7 text-white">
                {word}
              </span>
              <span className="text-sm sm:text-lg md:text-2xl opacity-50 text-purple-400 select-none">
                ✳
              </span>
            </div>
          ))}
        </div>
        <div
          className="animate-marquee-rtl flex items-center shrink-0"
          aria-hidden="true"
        >
          {[...keywordsBottom, ...keywordsBottom].map((word, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-wider uppercase px-3 sm:px-5 md:px-7 text-white">
                {word}
              </span>
              <span className="text-sm sm:text-lg md:text-2xl opacity-50 text-purple-400 select-none">
                ✳
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MarqueeSection;