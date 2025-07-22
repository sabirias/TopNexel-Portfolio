import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ResultsSection from "./components/sections/ResultsSection";
import ProcessSection from "./components/sections/ProcessSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ServicesSection from "./components/sections/ServicesSection";
import PricingSection from "./components/sections/PricingSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import CTASection from "./components/layout/CTASection";
import LoadingScreen from "./components/common/LoadingScreen";
import useScrollPosition from "./hooks/useScrollPosition";
import Modal from "./components/common/Modal";
import ContactForm from "./components/common/ContactForm";
import "./styles/animations.css";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const isScrolled = useScrollPosition();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />
      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <ContactForm onClose={() => setIsContactOpen(false)} />
      </Modal>
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onContactClick={() => setIsContactOpen(true)}
      />
      <HeroSection onContactClick={() => setIsContactOpen(true)} />
      <AboutSection />
      <PortfolioSection />
      {/* <ResultsSection /> */}
      <ProcessSection />
      <FeaturesSection />
      {/* <PortfolioSection /> */}
      {/* <ServicesSection /> */}
      {/* <PricingSection /> */}
      <CTASection onContactClick={() => setIsContactOpen(true)} />
      <Footer />
    </div>
  );
};

export default App;
