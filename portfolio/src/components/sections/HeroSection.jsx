import React, { useState, useRef, useEffect } from "react";
import AnimatedBackground from "../common/AnimatedBackground";
import Badge from "../common/Badge";
import GradientHeading from "../common/GradientHeading";
import CTAButton from "../common/CTAButton";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleConnect = () => {
    alert("Ready to connect! Add your contact form or redirect logic here.");
  };

  return (
    <div className="min-h-0 sm:min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 text-white overflow-hidden relative pt-24 sm:pt-32">
      {/* Fallback solid background */}
      <div className="absolute inset-0 bg-slate-900"></div>
      {/* Primary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/90 to-blue-900/80"></div>
      {/* Animated Background */}
      <AnimatedBackground mousePosition={mousePosition} />
      {/* Main Content */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col justify-start items-center px-4 sm:px-8 text-center pt-4 pb-4"
      >
        <Badge />
        {/* Subtitle */}
        <div className="text-cyan-400 text-lg sm:text-xl font-semibold mb-6 sm:mb-8 tracking-wide">
          Modern Web Solutions for Visionary Brands
        </div>
        <GradientHeading />
        {/* Description */}
        <p className="text-base sm:text-xl text-white/80 max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          That empower businesses to grow, thrive, and stand out in the digital
          landscape with innovative design and powerful functionality.
        </p>
        <CTAButton onClick={handleConnect} />
      </div>
    </div>
  );
};

export default HeroSection;
