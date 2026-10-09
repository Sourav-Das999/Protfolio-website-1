import React from "react";

// 7-ta Image Source List
const logoList = [
  "../image/Brand-1.png",
  "../image/Brand-2.png",
  "../image/Brand-3.png",
  "../image/Brand-4.png",
  "../image/Brand-5.png",
  "../image/Brand-6.png",
  "../image/Brand-7.png",
  "../image/Brand-8.png",
];

const TrustedClients = () => {
  // Constant non-stop smooth loop-er jonno 7-ta image ke multiply/duplicate kora hoyeche
  const duplicatedLogos = [...logoList, ...logoList, ...logoList, ...logoList];

  return (
    <section className="bg-[#140C1C] text-white py-12 overflow-hidden relative w-full">
      {/* 1. Header with lines */}
      <div className="flex items-center justify-center mb-8 px-4">
        <div className="h-[1px] bg-white/10 flex-1 max-w-full"></div>
        <h3 className="px-4 text-xs md:text-sm font-semibold tracking-wider text-gray-300 uppercase text-center">
          <span className="text-purple-400 font-bold">100+</span> TRUSTED
          CLIENTS OVER THE WORLD
        </h3>
        <div className="h-[1px] bg-white/10 flex-1 max-w-full"></div>
      </div>

      {/* 2. Marquee Wrapper with Sides Blur/Fade Effects */}
      <div className="relative w-full overflow-hidden">
        {/* Left Side Blur / Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-r from-[#0b0713] via-[#140C1C]/80 to-transparent z-10 pointer-events-none"></div>

        {/* Right Side Blur / Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-l from-[#0b0713] via-[#140C1C]/80 to-transparent z-10 pointer-events-none"></div>

        {/* 3. Non-stop Auto Left-to-Right Moving Images */}
        <div className="flex animate-marquee-ltr gap-6 py-2">
          {duplicatedLogos.map((logoSrc, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-[#050709] hover:bg-[#1a1228] border border-purple-900/20 rounded-xl px-8 py-4 min-w-[160px] h-[70px] shrink-0 transition-all duration-300"
            >
              <img
                src={logoSrc}
                alt={`Client Logo ${index + 1}`}
                className="max-h-[35px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
