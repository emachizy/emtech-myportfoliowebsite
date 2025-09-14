import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ServicesGrid = ({
  services,
  title = "Our Services",
  subtitle = "What We Offer",
  gridCols = "grid-cols-1 sm:grid-cols-3 md:grid-cols-4",
  showAnimation = true,
}) => {
  return (
    <>
      {/* Section Header */}
      <div className="w-[90%] mx-auto mb-24 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="p text-primary">{subtitle}</p>
          <h2 className="h2 text-gray-800 md:max-w-4xl mx-auto">{title}</h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="bg-primary w-14 h-0.5"></div>
            <div className="bg-primary w-2 h-0.5"></div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-[90%] mx-auto mb-24">
        <div className={`grid ${gridCols} gap-8`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center justify-center p-4 rounded-lg min-h-[220px] shadow hover:shadow-lg transition duration-300 ${
                showAnimation ? "hover:scale-105" : ""
              }`}
            >
              <div
                className={`w-12 h-12 ${
                  service.color || "bg-primary"
                } text-white flex items-center justify-center rounded-full mb-4`}
              >
                {service.icon ? (
                  <service.icon size="2em" />
                ) : (
                  <FaArrowAltCircleRight size="2em" />
                )}
              </div>
              <p className="text-center font-medium text-xl mb-2">
                {service.label || service.title}
              </p>
              {service.description && (
                <p className="text-center text-gray-600 text-sm">
                  {service.description}
                </p>
              )}
              <div className="relative w-full h-[2px]">
                <span className="absolute left-1/2 top-10 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out transform -translate-x-1/2"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;
