import React from "react";
import { motion } from "framer-motion";
import VideoEditorBadge from "./VideoEditorBadge";
import { imageUrl } from "../utils/imageUrl";

const Hero = () => {
  return (
    <section className="bg-[#140C1C] text-white min-h-screen relative overflow-hidden px-4 md:px-0 py-6 flex flex-col justify-center font-sora pt-24 sm:pt-32 md:pt-40">
      
      {/* 1. Big Background Heading: HELLO (Badge) MOTION */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-0 flex items-center justify-center gap-2 sm:gap-4 md:gap-6 flex-nowrap text-center -top-4 sm:-top-12 md:-top-20 w-full max-w-full px-2"
      >
        <h1 className="text-[clamp(2rem,8vw,180px)] font-semibold tracking-wider text-white uppercase whitespace-nowrap leading-none shrink-0">
          Hello
        </h1>

        {/* Rotating Circular Badge */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="shrink-0 flex items-center justify-center"
        >
          <VideoEditorBadge
            width={180}
            height={180}
            className="w-[clamp(40px,8vw,180px)] h-[clamp(40px,8vw,180px)]"
          />
        </motion.div>

        <h1 className="text-[clamp(2rem,8vw,180px)] font-semibold tracking-wider text-white uppercase whitespace-nowrap leading-none shrink-0">
          Motion
        </h1>
      </motion.div>

      {/* 2. Main Content Area */}
      <div className="relative z-10 w-full mx-auto mt-2 sm:-mt-6 md:mt-0 grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4 sm:px-6 lg:px-18">
        
        {/* Left Side: Floating Badge / Cursor (Desktop Only) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex md:col-span-3 flex-col items-end pr-4 relative"
        >
          <div className="relative border-2 border-dashed border-white/40 bg-white/5 backdrop-blur-md px-9 py-12 rounded-2xl max-w-[274px] shadow-2xl -top-43 left-80">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-white shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z" />
                <path
                  d="M19 2l1.25 3.75L24 7l-3.75 1.25L19 12l-1.25-3.75L14 7l3.75-1.25z"
                  opacity="0.7"
                />
              </svg>

              <p className="text-white font-medium text-base leading-snug text-left">
                Awarded Creative <br /> Video Editor.
              </p>
            </div>

            <span className="absolute -top-2 -left-2 w-4 h-4 bg-black border-2 border-white rounded-full"></span>
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-black border-2 border-white rounded-full"></span>
            <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-black border-2 border-white rounded-full"></span>

            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-16 -left-7 flex items-center z-20"
            >
              <svg
                width="45"
                height="48"
                viewBox="0 0 51 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <g filter="url(#filter0_d_1_511)">
                  <path
                    d="M33.3352 39.6375L39.4246 9.01651C39.5919 8.17541 38.6922 7.52775 37.9477 7.95322L11.1225 23.2818C10.3455 23.7259 10.4983 24.8888 11.3636 25.117L24.042 28.4608C24.2892 28.526 24.502 28.6833 24.6367 28.9005L31.5047 39.9697C31.983 40.7406 33.1582 40.5274 33.3352 39.6375Z"
                    fill="#7E4AE7"
                  />
                  <path
                    d="M40.5053 9.23138L34.4159 39.8524C34.0439 41.7228 31.5738 42.171 30.5684 40.5506L23.7218 29.5158L11.0826 26.1824C9.26376 25.7027 8.94263 23.2584 10.5758 22.3252L37.401 6.99654C38.966 6.10227 40.8568 7.46354 40.5053 9.23138Z"
                    stroke="white"
                    strokeWidth="2.20366"
                    strokeLinecap="square"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_511"
                    x="2.19345e-05"
                    y="5.55515e-05"
                    width="50.0649"
                    height="53.8665"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2.80466" />
                    <feGaussianBlur stdDeviation="4.20699" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_511"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_511"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <span className="bg-[#7E4AE7] text-white text-xs font-semibold px-4 py-1.5 rounded-2xl shadow-lg mt-20 -ml-25">
                Gerold
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Center: Main Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-6 flex justify-center"
        >
          <img
            src={imageUrl("hero-image.png")}
            alt="Gerold - Video Editor"
            className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[613px] h-auto md:h-[780px] object-cover"
          />
        </motion.div>

        {/* Right Side: Bio Text & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:col-span-3 flex justify-center w-full"
        >
          <div className="flex flex-col justify-between gap-6 md:gap-8 relative w-full max-w-[310px] items-start text-left">
            
            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-gray-300/80 leading-relaxed font-normal text-left w-full">
              My role as a amplify tha story through my careful{" "}
              <span className="text-white font-medium">[Video Editor]</span>{" "}
              selection of footages, pacing, and visual style. My keen attention
              to detail allows me to enhance the mood.
            </p>

            {/* Experience Section */}
            <div className="relative py-6 border-t border-b border-gray-800/80 w-full flex flex-col items-start">
              <div className="flex flex-col items-start w-full">
                <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight leading-none text-left">
                  12+
                </h2>
                <p className="text-sm text-gray-400 font-normal mt-1 md:self-end md:pr-8 text-left">
                  Years of Experience
                </p>
              </div>

              {/* Arrow Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-0 md:-right-35 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-purple-500/50 bg-[#1d132b]/50 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-all cursor-pointer"
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
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Bottom Circle Widget */}
            <div className="flex flex-col items-start relative w-full">
              <motion.div 
                whileHover={{ rotate: 45 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#130d1d] border border-gray-800/80 flex flex-col items-center justify-center gap-3 shadow-xl cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-white"
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
              </motion.div>
              <div className="w-5 h-5 rounded-full bg-[#7E4AE7] shadow-[0_0_12px_#7E4AE7] absolute top-12 left-12 md:top-auto md:left-auto md:-mt-13 md:ml-12"></div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;