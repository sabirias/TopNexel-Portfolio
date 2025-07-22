import React, { useState, useRef, useEffect } from "react";

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
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced Grid Overlay with Animation */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            animation: "grid-move 20s linear infinite",
          }}
        />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, index) => (
            <div
              key={`particle-${index}`}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0">
          {[
            { size: "w-20 h-20", position: "top-[20%] left-[10%]", delay: 0 },
            { size: "w-32 h-32", position: "top-[60%] right-[10%]", delay: 2 },
            { size: "w-16 h-16", position: "top-[80%] left-[20%]", delay: 4 },
            { size: "w-24 h-24", position: "top-[40%] right-[30%]", delay: 1 },
            { size: "w-12 h-12", position: "top-[70%] left-[70%]", delay: 3 },
          ].map((shape, index) => (
            <div
              key={index}
              className={`
                absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20
                ${shape.size} ${shape.position} animate-float-custom
              `}
              style={{
                transform: `translate(${
                  mousePosition.x * (index + 1) * 30
                }px, ${mousePosition.y * (index + 1) * 30}px)`,
                transition: "transform 0.8s ease-out",
                animationDelay: `${shape.delay}s`,
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>

        {/* Additional Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col justify-start items-center px-4 sm:px-8 text-center pt-24 pb-4"
      >
        {/* Badge */}
        <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full px-6 py-3 mb-6 sm:mb-12 backdrop-blur-lg shadow-lg shadow-cyan-500/25 animate-glow-pulse">
          {/* Glowing Star Icon */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse shadow-md shadow-yellow-400/50"></div>
            <span className="relative z-10 text-slate-900 text-sm font-bold leading-none">
              ★
            </span>
          </div>

          {/* Badge Text */}
          <span className="text-sm sm:text-base font-semibold text-white whitespace-nowrap z-20 relative">
            A Rising Star in Web Development
          </span>

          {/* Subtle shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Subtitle */}
        <div className="text-cyan-400 text-lg sm:text-xl font-semibold mb-6 sm:mb-8 tracking-wide">
          Modern Web Solutions for Visionary Brands
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6 sm:mb-8 bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          We specialize in
          <br />
          building{" "}
          <span className="relative inline-block">
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                cutting-edge
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 rounded-full animate-pulse animate-zoom" />
            </span>
          </span>
          <br />
          websites
        </h1>

        {/* Description */}
        <p className="text-base sm:text-xl text-white/80 max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          That empower businesses to grow, thrive, and stand out in the digital
          landscape with innovative design and powerful functionality.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleConnect}
          className="relative bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1 overflow-hidden group"
        >
          <span className="relative z-10">Connect With Us</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
