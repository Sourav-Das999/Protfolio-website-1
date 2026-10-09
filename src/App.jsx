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
      <SkillsSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Recent Work Section */}
      <RecentWorkSection />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Background Section */}
      <BackgroundSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Recent Blog Section */}
      <RecentBlogSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
