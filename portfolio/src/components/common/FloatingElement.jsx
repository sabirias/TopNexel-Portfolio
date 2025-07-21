// FloatingElement component placeholder
import React from "react";

const FloatingElement = ({ className = "", delay = 0 }) => (
  <div
    className={`absolute w-24 h-24 bg-gradient-radial from-cyan-400/10 to-transparent rounded-full animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

export default FloatingElement;
