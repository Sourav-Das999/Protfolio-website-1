import React from "react";
import { imageUrl } from "../utils/imageUrl";

const testimonialsData = [
  {
    id: 1,
    name: "Tim Bailey",
    role: "SEO Specialist, Theme Junction",
    image: "Testimonial-1.png",
    rating: 4,
    feedback:
      "“Taylor is a professional Designer really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional. Helps business providing value to my business. professional Designer he really helps my business",
  },
  {
    id: 2,
    name: "Brandon Fraser",
    role: "Senior Software Dev, Cosmic Sport",
    image: "Testimonial-2.png",
    rating: 4,
    feedback:
      "“Taylor is a professional Designer really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business.",
  },
  {
    id: 3,
    name: "Tim Bailey",
    role: "SEO Specialist, Theme Junction",
    image: "Testimonial-1.png",
    rating: 5,
    feedback:
      "“Taylor is a professional Designer really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business.",
  },
  {
    id: 4,
    name: "Brandon Fraser",
    role: "Senior Software Dev, Cosmic Sport",
    image: "Testimonial-2.png",
    rating: 4,
    feedback:
      "“Taylor is a professional Designer really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#0f0715] text-white py-16 md:py-24 px-4 sm:px-6 md:px-16 font-['Sora',sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        {/* Left Column: Heading & Contact Button */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-24 z-20">
          <span className="text-[11px] font-bold tracking-[2.5px] text-[#8b5cf6] uppercase block mb-4">
            CLIENTS FEEDBACK
          </span>

          {/* Figma Gradient Typography */}
          <h2
            className="text-3xl sm:text-4xl md:text-[45px] font-semibold tracking-[-0.9px] uppercase leading-tight md:leading-[54px] mb-8 max-w-[420px]"
            style={{
              background:
                "linear-gradient(90deg, #FFFFFF 50%, rgba(255, 255, 255, 0.4) 50%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            LET’S HEAR FROM <br />
            DEAR CLIENTS.
          </h2>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm w-[130px] sm:w-[179px] h-[40px] sm:h-[49px] rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{
              background:
                "linear-gradient(90deg, #8750F7 0%, #2A1454 51%, #8750F7 100%)",
              borderRadius: "9999px",
            }}
          >
            <span>Contact Me</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </a>
        </div>

        {/* Right Column: Auto-Scrolling Container with Fade Out */}
        <div className="w-full lg:w-7/12 relative h-[520px] overflow-hidden">
          {/* Top Fade Out Gradient Overlay */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0f0715] via-[#0f0715]/80 to-transparent z-10 pointer-events-none" />

          {/* Bottom Fade Out Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0715] via-[#0f0715]/80 to-transparent z-10 pointer-events-none" />

          {/* Infinite Vertical Auto Scroll Area */}
          <div className="flex flex-col gap-6 animate-vertical-scroll hover:[animation-play-state:paused]">
            {[...testimonialsData, ...testimonialsData].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className={`bg-[#140c1c] border ${
                  index % testimonialsData.length === 0
                    ? "border-[#8750F7]"
                    : "border-[#2a1745]/60 hover:border-[#8750F7]/60"
                } rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl shrink-0`}
              >
                {/* Header: Avatar + Info + Stars */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-[#2a1745] shrink-0">
                      <img
                        src={imageUrl(client.image)}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {client.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                        {client.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#8750F7]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-base sm:text-lg">
                        {i < client.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feedback Quote Text */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed opacity-90">
                  {client.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto Scroll Keyframe CSS Injection */}
      <style>{`
        @keyframes vertical-scroll {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
