import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import ModernLandingPage from "./components/sections/HeroSection";
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
import "./styles/animations.css";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isScrolled = useScrollPosition();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <HeroSection /> 
      <AboutSection />
      <PortfolioSection />
      {/* <ResultsSection /> */}
      <ProcessSection />
      <FeaturesSection />
      {/* <PortfolioSection /> */}
      {/* <ServicesSection /> */}
      {/* <PricingSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
