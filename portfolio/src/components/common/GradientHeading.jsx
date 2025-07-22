import React from "react";

const GradientHeading = () => (
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
);

export default GradientHeading;
