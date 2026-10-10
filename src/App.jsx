import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import TrustedClients from "./component/TrustedClients";
import SkillsSection from "./component/SkillsSection";
import AboutSection from "./component/AboutSection";
import ServicesSection from "./component/ServicesSection";
import RecentWorkSection from "./component/RecentWorkSection";
import MarqueeSection from "./component/MarqueeSection";
import BackgroundSection from "./component/BackgroundSection";
import TestimonialsSection from "./component/TestimonialsSection";
import RecentBlogSection from "./component/RecentBlogSection";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Hero section */}
      <Hero />

      {/* Trusted Clients section */}
      <TrustedClients />

      {/* Skills Section */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Recent Work / Works Section */}
      <div id="works">
        <RecentWorkSection />
      </div>

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Background / Resume Section */}
      <div id="resume">
        <BackgroundSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Recent Blog Section */}
      <div id="blog">
        <RecentBlogSection />
      </div>

      {/* Footer / Contact Section */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
