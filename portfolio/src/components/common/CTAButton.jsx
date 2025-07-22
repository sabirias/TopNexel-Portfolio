import React from "react";

const CTAButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="relative bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1 overflow-hidden group"
  >
    <span className="relative z-10">Connect With Us</span>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
  </button>
);

export default CTAButton;
