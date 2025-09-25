import React from "react";
import {
  FaRegLightbulb,
  FaProjectDiagram,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl text-primary" />,
    title: "Understanding Your Needs",
    description:
      "Understand client needs, goals, and target audience to define project scope.",
  },
  {
    id: 2,
    icon: <FaProjectDiagram className="text-4xl text-primary" />,
    title: "Strategizing and Planning",
    description:
      "Develop a detailed strategy, structure, and timeline for efficient execution.",
  },
  {
    id: 3,
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    title: "Design and Development",
    description:
      "Design, develop, and implement solutions based on the agreed strategy.",
  },
  {
    id: 4,
    icon: <FaTools className="text-4xl text-primary" />,
    title: "Testing, Launch, and Support",
    description:
      "Test, launch the site, and provide ongoing support for updates and maintenance.",
  },
];

const ProcessSection = () => {
  return (
    <section className="w-[90%] mx-auto py-16 text-center">
      {/* Heading */}
      <div className="mb-12">
        <p className="p text-primary">Process</p>
        <h2 className="h2">How we work</h2>
        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="bg-primary w-14 h-0.5"></div>
          <div className="bg-primary w-2 h-0.5"></div>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white p-8 rounded-lg shadow-m group overflow-hidden"
          >
            {/* Hover Borders (simultaneous animation) */}
            <span className="absolute top-0 right-0 w-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full" />
            <span className="absolute top-0 right-0 h-0 w-[3px] bg-primary transition-all duration-500 group-hover:h-full" />
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full" />
            <span className="absolute bottom-0 left-0 h-0 w-[3px] bg-primary transition-all duration-500 group-hover:h-full" />

            {/* Step Content */}
            <div className="mb-4 flex justify-center relative z-10">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 relative z-10">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm relative z-10">
              {step.description}
            </p>

            {/* Step Number in Background */}
            <span className="absolute top-4 left-4 text-6xl font-bold text-gray-100 z-0">
              {String(step.id).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
