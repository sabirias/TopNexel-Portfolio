// FeaturesSection component placeholder
import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:transform hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-300">
    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl mb-4">
      {icon}
    </div>
    <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: "💰",
      title: "Boost Your Revenue",
      description:
        "Unlock new revenue streams with data-driven strategies and marketing.",
    },
    {
      icon: "🎨",
      title: "Customizable Assets",
      description:
        "Easily modify and personalize design elements to fit your brand's identity.",
    },
    {
      icon: "🚀",
      title: "Bug Less Development",
      description:
        "Our bug-less development ensures that your website runs smooth and fast.",
    },
    {
      icon: "🏆",
      title: "Award-Winning Designs",
      description:
        "Our award-winning designs showcase creativity that set us apart in the industry.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast Delivery",
      description:
        "Ensuring your deliverables are ready when you need them, with great quality.",
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description:
        "Our mobile-friendly design ensures your design looks stunning across all devices.",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900"
      id="features"
    >
      <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Unlimited Design Features Delivered In A Second!
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get unlimited design features that give you the freedom to create
            without boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
