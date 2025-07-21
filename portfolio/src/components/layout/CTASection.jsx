// CTASection component placeholder
// src/components/layout/CTASection.jsx
import React from "react";
import Button from "../common/Button";

const CTASection = () => (
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
      <Button href="#contact" className="px-8 py-4">
        Book an Appointment
      </Button>
    </div>
  </section>
);

export default CTASection;
