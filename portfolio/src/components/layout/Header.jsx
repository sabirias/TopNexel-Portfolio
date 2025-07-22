// Header component placeholder
// src/components/layout/Header.jsx
import React from "react";
import Button from "../common/Button";

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen, onContactClick }) => {
  const navItems = ["Home", "About", "Portfolio", "Contact"];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-br from-black/70 via-slate-900/80 to-blue-900/70 backdrop-blur-xl border-b border-cyan-400/20 shadow-lg shadow-cyan-900/20`}
    >
      <nav className="container mx-auto px-6 py-4 max-w-[1200px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-neonCyan">
            TopNexel
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            type="button"
            className="hidden md:block px-6 py-3 inline-block rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30"
            onClick={onContactClick}
          >
            Get In Touch
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <ul className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === "Home" ? "hero" : item.toLowerCase()}`}
                    className="block py-2 text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
