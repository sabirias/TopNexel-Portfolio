// CTASection component placeholder
// src/components/layout/CTASection.jsx
import React from "react";
import Button from "../common/Button";

const CTASection = ({ onContactClick }) => (
  <section
    className="py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900"
    id="contact"
  >
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Each Project we Undertake is a Unique Opportunity
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8">
        Ready to take the next step? Join us now and start transforming your
        vision into reality with expert support.
      </p>
      <button
        type="button"
        className="px-8 py-4 inline-block rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/30"
        onClick={onContactClick}
      >
        Start Your Journey
      </button>
    </div>
  </section>
);

export default CTASection;
