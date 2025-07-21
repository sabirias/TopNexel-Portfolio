// ProcessSection component placeholder
// src/components/sections/ProcessSection.jsx
import React from "react";

const ProcessStep = ({ number, title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center font-bold text-black text-xl mx-auto mb-6">
      {number}
    </div>
    <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Kickoff",
      description:
        "The kickoff stage is where everything begins. We align with you to understand your goals, vision, and expectations through comprehensive consultation and project roadmap.",
    },
    {
      number: 2,
      title: "Execution",
      description:
        "With a clear strategy in place, we move into execution phase where ideas come to life with seamless integration and real-time collaboration.",
    },
    {
      number: 3,
      title: "Handoff",
      description:
        "Once design and development are finalized, we provide you with all assets, documentation, and ongoing support for a smooth launch.",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-black/70 via-slate-900/80 to-blue-900/70"
      id="process"
    >
      <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            We Simplify The Journey From Design To Launch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We make it easy to bring your ideas to life, guiding you from
            concept to a fully launched product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
