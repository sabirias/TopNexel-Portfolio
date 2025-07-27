import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import ecommerceImage from "../../assets/images/ecommerce.png";
import portfolioImage from "../../assets/images/portfolio.png";
import groceryImage from "../../assets/images/groceryStore.png";
import groceryLandingPageImage from "../../assets/images/groceryLandingPage.png";
import expenceTrackerImage from "../../assets/images/expenceTrack.png";
import travelAgencyImage from "../../assets/images/hajj&umrahTravel.png";

const PortfolioCard = ({
  image,
  title,
  description,
  technologies,
  liveLink,
  githubLink,
  isVisible,
}) => (
  <div
    className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-500 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
  >
    {/* Project Image */}
    <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10"></div>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-fit" />
      </div>
    </div>

    {/* Project Content */}
    <div className="p-6">
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-center"
          >
            Live Demo
          </a>
        )}
        {/* {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-400/10 transition-all duration-300 text-center"
          >
            GitHub
          </a>
        )} */}
      </div>
    </div>
  </div>
);

const PortfolioSection = () => {
  const [portfolioRef, isPortfolioVisible] = useIntersectionObserver(0.3);

  const portfolioProjects = [
    {
      image: ecommerceImage,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://e-store-delta-six.vercel.app/",
      githubLink: "https://github.com/username/ecommerce-platform",
    },
    {
      image: groceryImage,
      title: "Grocery Store App",
      description:
        "A modern grocery website that lets users browse products, manage shopping carts, and collaborate with others for seamless group shopping.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "MongoDB",
      ],
      liveLink: "https://grocery-store-app-six.vercel.app/",
      githubLink: "https://github.com/username/task-management",
    },
    {
      image: portfolioImage,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing creative work and professional experience.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://top-nexel-portfolio-icv3.vercel.app/",
      githubLink: "https://github.com/username/portfolio",
    },
    {
      image: groceryLandingPageImage,
      title: "Grocery Store Landing Page",
      description:
        "A modern grocery website that lets users browse products, manage shopping carts, and collaborate with others for seamless group shopping.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
      liveLink: "https://grocery-store-landing-page.vercel.app/",
      githubLink: "https://github.com/username/game-dashboard",
    },
    {
      image: expenceTrackerImage,
      title: "Expence Tracker",
      description:
        "A comprehensive expence tracker with charts, graphs, and data insights for business intelligence.",
      technologies: [
        "Next.js",
        "Chart.js",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      liveLink:
        "https://6000-firebase-studio-1753452309611.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev/",
      githubLink: "https://github.com/username/analytics-dashboard",
    },
    {
      image: travelAgencyImage,
      title: "Travel Agency",
      description:
        "A travel agency website that lets users browse and book hajj, umrah, and tours.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "MongoDB",
      ],
      liveLink:
        "https://6000-firebase-studio-1753395741873.cluster-iktsryn7xnhpexlu6255bftka4.cloudworkstations.dev/",
      githubLink: "https://github.com/username/food-delivery",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-900"
      id="portfolio"
    >
      <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore our Creative Portfolio
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects showcasing innovative solutions and
            cutting-edge technologies.
          </p>
        </div>

        <div
          ref={portfolioRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioProjects.map((project, index) => (
            <PortfolioCard
              key={index}
              {...project}
              isVisible={isPortfolioVisible}
            />
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
          >
            View More Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioSection;
