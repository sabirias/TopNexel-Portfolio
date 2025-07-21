// Particle component placeholder
// src/components/common/Particle.jsx
import React, { useEffect, useState } from "react";

const Particle = ({ delay = 0, duration = 10000 }) => {
  const [position, setPosition] = useState({ x: Math.random() * 100, y: 100 });

  useEffect(() => {
    let timeoutId;

    const animate = () => {
      setPosition({ x: Math.random() * 100, y: 100 }); // Reset to bottom
      timeoutId = setTimeout(() => {
        setPosition({ x: Math.random() * 100, y: -10 }); // Move to top
        timeoutId = setTimeout(animate, duration); // After animation, repeat
      }, delay);
    };

    animate();

    return () => clearTimeout(timeoutId);
  }, [delay, duration]);

  return (
    <div
      className="absolute w-0.5 h-0.5 bg-neonCyan rounded-full opacity-50 pointer-events-none transition-all duration-[10s] ease-linear"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${position.y === -10 ? 360 : 0}deg)`,
      }}
    />
  );
};

export default Particle;
