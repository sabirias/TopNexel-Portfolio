// AboutSection component placeholder
// src/components/sections/AboutSection.jsx
import React from "react";
import StatCard from "../common/StatCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const AboutSection = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver(0.5);

  return (
    <section
      className="py-20 bg-gradient-to-br from-black/70 via-slate-900/80 to-blue-900/70"
      id="about"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div>
            <h2
              className="text-4xl font-bold text-white mb-6"
              style={{ lineHeight: "64px" }}
            >
              Building Stronger Brands Creating Impressions!
            </h2>
            <p className="text-gray-300 mb-6">
              Delivering high-quality, on-demand designs with precision. Elevate
              your brand effortlessly, one snap at a time.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="flex space-x-8 mt-8">
              <StatCard
                number={500}
                label="Revenue Generated"
                suffix="K"
                isAnimated={isStatsVisible}
              />
              <StatCard
                number={47}
                label="Growth Rate"
                suffix="%"
                isAnimated={isStatsVisible}
              />
              <StatCard
                number={200}
                label="Agencies Rated"
                suffix="+"
                isAnimated={isStatsVisible}
              />
            </div>
          </div>

          {/* Right Illustration Placeholder */}
          <div className="h-96 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-3xl flex items-center justify-center text-cyan-400 text-xl">
            <img
              src="/banner.jpg"
              alt="Woman Using Laptop"
              className="w-full h-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
