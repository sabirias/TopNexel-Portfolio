import React from "react";

const Badge = () => (
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
);

export default Badge;
