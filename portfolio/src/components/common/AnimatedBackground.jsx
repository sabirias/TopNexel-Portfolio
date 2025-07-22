import React, { useState, useEffect } from "react";

const AnimatedBackground = ({ mousePosition }) => {
  return (
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
              transform: `translate(${mousePosition.x * (index + 1) * 30}px, ${
                mousePosition.y * (index + 1) * 30
              }px)`,
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
  );
};

export default AnimatedBackground;
