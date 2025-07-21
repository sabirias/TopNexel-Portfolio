// ResultsSection component placeholder
// src/components/sections/ResultsSection.jsx
import React from "react";

const ResultCard = ({ title, description, stats }) => (
  <div className="bg-gradient-to-br from-cyan-400/5 to-blue-500/5 border border-cyan-400/10 rounded-3xl p-7 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
    <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-[#012024] px-3 py-2 rounded-lg text-cyan-400 text-sm font-semibold shadow-none border border-cyan-400/10 max-w-[150px] text-left"
        >
          {stat}
        </div>
      ))}
    </div>
  </div>
);

const ResultsSection = () => {
  const results = [
    {
      title: "Crimson Studio",
      description:
        "Achieved increase in sales within six months through a customized strategy.",
      stats: ["30% Increase in Sales", "40% Boost in Retention"],
    },
    {
      title: "Raven Company Inc",
      description:
        "Streamlined operations, reducing costs with our automation solutions.",
      stats: ["25% Conversion Rates", "50% Reduced CPA"],
    },
    {
      title: "Gotham Wonder",
      description:
        "Boosted customer engagement with digital presence and targeted campaigns.",
      stats: ["60% Increased Traffic", "35% Growth in Sales"],
    },
    {
      title: "Sling Interactive Tech",
      description:
        "Expanded market reach, tapping into new demographics with driven approach.",
      stats: ["20% Market Share", "45% Enhanced Visibility"],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-900"
      id="results"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Delivering Tangible Results That Propel Your Success
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            At the core of everything we do lies a commitment to delivering
            measurable outcomes that drive your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
