import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { imageUrl } from "../utils/imageUrl";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Smooth scroll handler function
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMobileMenu();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#050709] text-white px-4 md:px-8 py-4 sticky top-0 z-50 shadow-[0_12px_24px_-6px_rgba(168,85,247,0.25)]"
    >
      <div className="flex items-center justify-between w-full mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src={imageUrl("logo.png")}
            alt="logo"
            className="h-8 md:h-10 object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-white/50 font-medium text-sm xl:text-base">
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Services
          </a>
          <a 
            href="#works" 
            onClick={(e) => handleNavClick(e, "works")}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Works
          </a>
          <a 
            href="#resume" 
            onClick={(e) => handleNavClick(e, "resume")}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Resume
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleNavClick(e, "skills")}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleNavClick(e, "testimonials")}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions (Social Icons + CTA Button + Hamburger) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Social Icons Container (Hidden on small screens) */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Facebook Icon */}
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all"
            >
              <svg
                width="7"
                height="13"
                viewBox="0 0 7 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.52539 7.3125H4.62109V13H2.08203V7.3125H0V4.97656H2.08203V3.17383C2.08203 1.14258 3.30078 0 5.1543 0C6.04297 0 6.98242 0.177734 6.98242 0.177734V2.18359H5.94141C4.92578 2.18359 4.62109 2.79297 4.62109 3.45312V4.97656H6.88086L6.52539 7.3125Z"
                  fill="white"
                />
              </svg>
            </motion.a>

            {/* LinkedIn Icon */}
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.53906 11.3496H0.177734V3.75781H2.53906V11.3496ZM1.3457 2.74219C0.609375 2.74219 0 2.10742 0 1.3457C0 0.609375 0.609375 0 1.3457 0C2.10742 0 2.7168 0.609375 2.7168 1.3457C2.7168 2.10742 2.10742 2.74219 1.3457 2.74219ZM11.3496 11.3496H9.01367V7.66797C9.01367 6.7793 8.98828 5.66211 7.76953 5.66211C6.55078 5.66211 6.37305 6.60156 6.37305 7.5918V11.3496H4.01172V3.75781H6.27148V4.79883H6.29688C6.62695 4.21484 7.38867 3.58008 8.53125 3.58008C10.918 3.58008 11.375 5.1543 11.375 7.18555V11.3496H11.3496Z"
                  fill="white"
                />
              </svg>
            </motion.a>

            {/* GitHub Icon */}
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.18945 9.90234C4.18945 9.95312 4.13867 9.97852 4.0625 9.97852C3.98633 10.0039 3.93555 9.95312 3.93555 9.90234C3.93555 9.85156 3.98633 9.80078 4.0625 9.80078C4.13867 9.80078 4.18945 9.85156 4.18945 9.90234ZM3.40234 9.77539C3.42773 9.72461 3.50391 9.69922 3.58008 9.72461C3.65625 9.75 3.68164 9.80078 3.68164 9.85156C3.65625 9.90234 3.58008 9.92773 3.5293 9.90234C3.45312 9.90234 3.40234 9.82617 3.40234 9.77539ZM4.54492 9.75C4.5957 9.72461 4.67188 9.77539 4.67188 9.82617C4.69727 9.87695 4.64648 9.90234 4.57031 9.92773C4.49414 9.95312 4.41797 9.92773 4.41797 9.87695C4.41797 9.80078 4.46875 9.75 4.54492 9.75ZM6.19531 0C9.72461 0 12.5938 2.69141 12.5938 6.19531C12.5938 9.01367 10.8672 11.4258 8.32812 12.2637C7.99805 12.3398 7.87109 12.1367 7.87109 11.959C7.87109 11.7559 7.89648 10.6895 7.89648 9.85156C7.89648 9.24219 7.69336 8.86133 7.46484 8.6582C8.88672 8.50586 10.3848 8.30273 10.3848 5.86523C10.3848 5.1543 10.1309 4.82422 9.72461 4.36719C9.77539 4.18945 10.0039 3.5293 9.64844 2.64062C9.11523 2.46289 7.89648 3.32617 7.89648 3.32617C7.38867 3.17383 6.85547 3.12305 6.29688 3.12305C5.76367 3.12305 5.23047 3.17383 4.72266 3.32617C4.72266 3.32617 3.47852 2.48828 2.9707 2.64062C2.61523 3.5293 2.81836 4.18945 2.89453 4.36719C2.48828 4.82422 2.28516 5.1543 2.28516 5.86523C2.28516 8.30273 3.73242 8.50586 5.1543 8.6582C4.95117 8.83594 4.79883 9.11523 4.74805 9.52148C4.36719 9.69922 3.45312 9.97852 2.89453 8.98828C2.53906 8.37891 1.9043 8.32812 1.9043 8.32812C1.29492 8.32812 1.87891 8.73438 1.87891 8.73438C2.28516 8.91211 2.56445 9.64844 2.56445 9.64844C2.94531 10.791 4.72266 10.4102 4.72266 10.4102C4.72266 10.9434 4.72266 11.8066 4.72266 11.9844C4.72266 12.1367 4.62109 12.3398 4.29102 12.2891C1.75195 11.4258 0 9.01367 0 6.19531C0 2.69141 2.69141 0 6.19531 0ZM2.46289 8.75977C2.48828 8.73438 2.53906 8.75977 2.58984 8.78516C2.64062 8.83594 2.64062 8.91211 2.61523 8.9375C2.56445 8.96289 2.51367 8.9375 2.46289 8.91211C2.4375 8.86133 2.41211 8.78516 2.46289 8.75977ZM2.18359 8.55664C2.20898 8.53125 2.23438 8.53125 2.28516 8.55664C2.33594 8.58203 2.36133 8.60742 2.36133 8.63281C2.33594 8.68359 2.28516 8.68359 2.23438 8.6582C2.18359 8.63281 2.1582 8.60742 2.18359 8.55664ZM2.99609 9.4707C3.04688 9.41992 3.12305 9.44531 3.17383 9.49609C3.22461 9.54688 3.22461 9.62305 3.19922 9.64844C3.17383 9.69922 3.09766 9.67383 3.04688 9.62305C2.9707 9.57227 2.9707 9.49609 2.99609 9.4707ZM2.7168 9.08984C2.76758 9.06445 2.81836 9.08984 2.86914 9.14062C2.89453 9.19141 2.89453 9.26758 2.86914 9.29297C2.81836 9.31836 2.76758 9.29297 2.7168 9.24219C2.66602 9.19141 2.66602 9.11523 2.7168 9.08984Z"
                  fill="white"
                />
              </svg>
            </motion.a>

            {/* Dribbble / Web Icon */}
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-purple-500 hover:text-purple-400 transition-all"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.38867 12.1113C7.33789 11.8743 7.3125 11.6289 7.3125 11.375C7.32943 10.3763 7.63411 9.52148 8.22656 8.81055L10.2324 10.791C9.41992 11.502 8.472 11.9421 7.38867 12.1113ZM6.57617 12.1875C6.55924 12.1875 6.54232 12.1875 6.52539 12.1875C6.52539 12.1875 6.51693 12.1875 6.5 12.1875C5.04427 12.1536 3.80013 11.6882 2.76758 10.791L6.5 7.08398L7.64258 8.22656C6.89779 9.10677 6.51693 10.1562 6.5 11.375C6.5 11.6458 6.52539 11.9167 6.57617 12.1875ZM8.22656 7.64258L7.08398 6.5L10.791 2.76758C11.6882 3.80013 12.1536 5.04427 12.1875 6.5C12.1875 6.51693 12.1875 6.52539 12.1875 6.52539C12.1875 6.54232 12.1875 6.55924 12.1875 6.57617C11.9167 6.52539 11.6458 6.5 11.375 6.5C10.1562 6.51693 9.10677 6.89779 8.22656 7.64258ZM8.81055 8.22656C9.52148 7.63411 10.3763 7.32943 11.375 7.3125C11.6289 7.3125 11.8743 7.33789 12.1113 7.38867C11.9421 8.47201 11.502 9.41992 10.791 10.2324L8.81055 8.22656ZM6.5 5.91602L5.35742 4.77344C6.10221 3.89323 6.48307 2.84375 6.5 1.625C6.5 1.35417 6.47461 1.08333 6.42383 0.8125C6.44076 0.8125 6.45768 0.8125 6.47461 0.8125C6.47461 0.8125 6.48307 0.8125 6.5 0.8125C7.95573 0.846354 9.19987 1.31185 10.2324 2.20898L6.5 5.91602ZM4.77344 4.18945L2.76758 2.20898C3.58008 1.49805 4.52799 1.05794 5.61133 0.888672C5.66211 1.12565 5.6875 1.37109 5.6875 1.625C5.67057 2.6237 5.36589 3.47852 4.77344 4.18945ZM4.18945 4.77344C3.47852 5.36589 2.6237 5.67057 1.625 5.6875C1.37109 5.6875 1.12565 5.66211 0.888672 5.61133C1.05794 4.528 1.49805 3.58008 2.20898 2.76758L4.18945 4.77344ZM0.8125 6.42383C1.08333 6.47461 1.35417 6.5 1.625 6.5C2.84375 6.48307 3.89323 6.10221 4.77344 5.35742L5.91602 6.5L2.20898 10.2324C1.31185 9.19987 0.846354 7.95573 0.8125 6.5C0.8125 6.48307 0.8125 6.47461 0.8125 6.47461C0.8125 6.45768 0.8125 6.44076 0.8125 6.42383ZM6.5 13C7.6849 12.9831 8.76823 12.6953 9.75 12.1367C10.7318 11.5612 11.5273 10.7656 12.1367 9.75C12.7122 8.71745 13 7.63411 13 6.5C13 5.36589 12.7122 4.28255 12.1367 3.25C11.5273 2.23438 10.7318 1.4388 9.75 0.863281C8.76823 0.304688 7.6849 0.0169268 6.5 0C5.3151 0.0169268 4.23177 0.304688 3.25 0.863281C2.26823 1.4388 1.47266 2.23438 0.863281 3.25C0.28776 4.28255 0 5.36589 0 6.5C0 7.63411 0.28776 8.71745 0.863281 9.75C1.47266 10.7656 2.26823 11.5612 3.25 12.1367C4.23177 12.6953 5.3151 12.9831 6.5 13Z"
                  fill="white"
                />
              </svg>
            </motion.a>
          </div>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm w-[130px] sm:w-[179px] h-[40px] sm:h-[49px] rounded-full transition-all duration-300 shadow-md cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, #8750F7 0%, #2A1454 51%, #8750F7 100%)",
              borderRadius: "9999px",
            }}
          >
            <span>Lets Talk</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
          </motion.a>

          {/* Mobile 3-Line (Hamburger) Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 pt-4 pb-3 border-t border-gray-800/80 bg-[#050709] rounded-b-2xl overflow-hidden"
          >
            <nav className="flex flex-col gap-4 text-center text-white/80 font-medium text-sm">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="py-1 hover:text-purple-400 transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                href="#works"
                onClick={(e) => handleNavClick(e, "works")}
                className="py-1 hover:text-purple-400 transition-colors cursor-pointer"
              >
                Works
              </a>
              <a
                href="#resume"
                onClick={(e) => handleNavClick(e, "resume")}
                className="py-1 hover:text-purple-400 transition-colors cursor-pointer"
              >
                Resume
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, "skills")}
                className="py-1 hover:text-purple-400 transition-colors cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, "testimonials")}
                className="py-1 hover:text-purple-400 transition-colors cursor-pointer"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="py-1 hover:text-purple-400 transition-colors cursor-pointer"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;