// PricingSection component placeholder
// src/components/sections/PricingSection.jsx
import React from "react";
import Button from "../common/Button";

const PricingCard = ({ name, price, period, features, featured = false }) => (
  <div
    className={`${
      featured
        ? "border-cyan-400 shadow-lg shadow-cyan-400/20"
        : "border-cyan-400/10"
    } bg-gradient-to-br from-cyan-400/5 to-blue-500/5 border rounded-3xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300`}
  >
    <div className="text-2xl font-semibold text-white mb-4">{name}</div>
    <div className="mb-6">
      <span className="text-5xl font-bold text-cyan-400">{price}</span>
      <span className="text-gray-300">{period}</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="text-gray-300 flex items-center justify-center">
          <span className="text-cyan-400 mr-3">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <Button href="#contact" className="w-full text-center">
      Book an Appointment
    </Button>
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      period: "/month",
      features: [
        "100+ Projects",
        "75+ Revisions",
        "All templates unlocked",
        "Unlimited Licenses",
        "Lifetime Updates",
        "Email support",
        "30-Days Money-back Guarantee",
      ],
    },
    {
      name: "Premium",
      price: "$2,599",
      period: "/month",
      featured: true,
      features: [
        "650+ Projects",
        "250+ Revisions",
        "All templates unlocked",
        "Unlimited Licenses",
        "Lifetime Updates",
        "Email support",
        "30-Days Money-back Guarantee",
      ],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900"
      id="pricing"
    >
      <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Plans for all businesses
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our pricing plans are designed to make getting started as effortless
            as possible with flexible options tailored to suit a variety of
            needs and budgets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
