// Footer component placeholder
// src/components/layout/Footer.jsx
import React from "react";

const Footer = () => {
  const templatePages = ["Home", "About", "Portfolio", "Contact"];
  const socialLinks = ["LinkedIn"];

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Template Pages */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Template Pages
            </h3>
            <ul className="space-y-2">
              {templatePages.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {socialLinks.map((item) => (
                <li key={item}>
                  <a
                    href="https://www.linkedin.com/in/sabir-developer/"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              Made remotely with ❤️ and passion - TopNexel Solutions.
            </p>
            <p className="text-gray-400 mb-2">
              <a
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=topnexel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                topnexel@gmail.com
              </a>
            </p>
            {/* <p className="text-gray-400">Sales - 7,360,109</p> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © 2025 TopNexel Design |{" "}
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
