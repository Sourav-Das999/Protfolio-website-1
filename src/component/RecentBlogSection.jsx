import React from "react";
import { imageUrl } from "../utils/imageUrl";

const blogPosts = [
  {
    id: 1,
    title: "THE ROLE OF TECHNOLOGY IN MODERN LOG",
    category: "Business",
    date: "Nov 01, 2025",
    badge: "Video",
    image: "editor-1.png",
    link: "#",
  },
  {
    id: 2,
    title: "THE ROLE OF TECHNOLOGY IN MODERN LOG",
    category: "Development",
    date: "Aug 01, 2025",
    badge: "Editing",
    image: "editor-2.png",
    link: "#",
  },
  {
    id: 3,
    title: "DIGITAL MARKETO TO THEIR NEW OFFICE.",
    category: "Portfolio",
    date: "Nov 01, 2025",
    badge: "Video",
    image: "editor-3.png",
    link: "#",
  },
];

const RecentBlogSection = () => {
  return (
    <section className="bg-[#0f0715] text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 font-['Sora',sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Subtitle */}
        <span className="text-[11px] font-bold tracking-[2.5px] text-[#8b5cf6] uppercase block mb-3 text-center">
          BEHIND THE PIXELS
        </span>

        {/* Gradient Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-[45px] font-semibold tracking-[-0.9px] uppercase leading-tight md:leading-[54px] text-center mb-12 sm:mb-16"
          style={{
            background:
              "linear-gradient(90deg, #FFFFFF 50%, rgba(255, 255, 255, 0.4) 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          READ MY RECENT BLOG
        </h2>

        {/* Blog Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="bg-[#140C1C] border border-[#1d1429] hover:border-[#8750F7]/50 rounded-3xl p-5 flex flex-col justify-between group transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Image & Badge Container */}
                <div className="relative w-full h-[240px] sm:h-[260px] rounded-2xl overflow-hidden mb-6 bg-[#140c1d]">
                  <img
                    src={imageUrl(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top-Left Category Badge */}
                  <span className="absolute top-4 left-4 bg-[#8750F7]/80 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                    {post.badge}
                  </span>
                </div>

                {/* Category & Date Info */}
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm font-medium mb-3">
                  <span>{post.category}</span>
                  <span className="text-gray-600">•</span>
                  <span>{post.date}</span>
                </div>

                {/* Blog Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#8750F7] transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogSection;
