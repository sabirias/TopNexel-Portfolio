// ServicesSection component placeholder
import React from "react";
import Button from "../common/Button";

const ServiceCard = ({ title, description, price, features }) => (
  <div className="bg-gradient-to-br from-cyan-400/5 to-blue-500/5 border border-cyan-400/10 rounded-3xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
    <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    <div className="flex items-center gap-3 mb-6">
      <span className="text-3xl font-bold text-cyan-400">{price}</span>
      <span className="text-gray-300">/ Project</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="text-gray-300 flex items-center">
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

const ServicesSection = () => {
  const services = [
    {
      title: "Full Website Sprint",
      description:
        "By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality.",
      price: "$2,500",
      features: [
        "2-3 Week delivery",
        "Design + Framer Development",
        "Interactive Elements",
      ],
    },
    {
      title: "Full Design Package",
      description:
        "From custom logo designs to comprehensive brand guidelines, web design, and marketing materials, we cover all aspects of your visual presence.",
      price: "$4,500",
      features: [
        "3-4 Week delivery",
        "Files + Branding Assets",
        "Easy to Edit and Access",
      ],
    },
    {
      title: "Full Stack Development",
      description:
        "Whether you're building a simple website or a complex web application, our team provides scalable solutions tailored to your needs.",
      price: "$7,500",
      features: [
        "4-6 Week delivery",
        "HTML + JavaScript + React Code",
        "Database and Back-End",
      ],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-black/70 via-slate-900/80 to-blue-900/70"
      id="services"
    >
      <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get High-Quality Clear Services Remotely
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our range of services designed to elevate your brand and
            propel your business to the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
