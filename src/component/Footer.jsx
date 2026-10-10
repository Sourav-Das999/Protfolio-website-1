import React from "react";
import { motion } from "framer-motion";
import { imageUrl } from "../utils/imageUrl";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f0715] pt-12 font-['Sora',sans-serif] overflow-hidden">
      {/* Footer Container with Motion Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full rounded-t-[60px] md:rounded-t-[100px] text-white pt-16 sm:pt-20 pb-8 px-6 sm:px-12 md:px-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 10% 80%, rgba(0, 210, 255, 0.45) 0%, transparent 40%),
            radial-gradient(circle at 80% 90%, rgba(255, 0, 200, 0.5) 0%, transparent 45%),
            radial-gradient(circle at 50% 20%, rgba(135, 80, 247, 0.9) 0%, rgba(42, 17, 92, 0.95) 100%)
          `,
        }}
      >
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100 pointer-events-none"
          style={{ backgroundImage: `url("${imageUrl("footer-bg.png")}")` }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Section: Grid Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-white/15">
            {/* Column 1: Brand & Intro */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-xl shadow-md">
                  G
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Gerold
                </span>
              </div>

              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xs">
                I break down complex user the experience problems the create
                integrity focused to solutions that's connect.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {["f", "📷", "✕", "in"].map((icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#8750f7] text-white flex items-center justify-center text-xs font-semibold transition-colors duration-300"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Column 2: Legal Details */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase mb-5">
                LEGAL DETAILS
              </h4>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-white/80 font-normal">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Policy Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Term & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Refund And Cancellation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Details */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase mb-5">
                CONTACT
              </h4>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-white/80 font-normal">
                <li>
                  <a
                    href="mailto:Hello-Designer@Gerold.Com"
                    className="hover:text-white transition-colors"
                  >
                    Hello-Designer@Gerold.Com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+011236548096"
                    className="hover:text-white transition-colors"
                  >
                    +01 123 654 8096
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+011236548096"
                    className="hover:text-white transition-colors"
                  >
                    +01 123 654 8096
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase mb-5">
                SUBSCRIBE TO MY NEWSLETTER!
              </h4>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2"
              >
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-white text-gray-900 placeholder-gray-400 text-xs sm:text-sm px-5 py-3 rounded-full outline-none shadow-md"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center shrink-0 shadow-md cursor-pointer"
                  aria-label="Subscribe"
                >
                  <svg
                    className="w-4 h-4"
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
                </motion.button>
              </form>
            </div>
          </div>

          {/* Bottom Bar Section */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/90 font-medium">
            {/* Freelance Badge */}
            <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase tracking-wider font-bold">
                AVAILABLE FOR FREELANCE
              </span>
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-6 tracking-wider uppercase">
              <a href="#work" className="hover:text-white transition-colors">
                WORK.
              </a>
              <a
                href="#services"
                className="hover:text-white transition-colors"
              >
                SERVICES.
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                ABOUT.
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                CONTACT.
              </a>
            </div>

            {/* Copyright */}
            <div className="text-white/70 tracking-wider uppercase text-center md:text-right">
              ©ALL RIGHTS RESERVED BYTHEMEJUNCTION
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;