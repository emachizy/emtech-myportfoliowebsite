import React from "react";

const ServicesCards = ({
  services,
  title = "What you will get",
  subtitle = "We Offers",
  showHeader = true,
  cardLayout = "horizontal", // "horizontal" or "vertical"
}) => {
  return (
    <div>
      {/* Section Header */}
      {showHeader && (
        <div className="max-w-4xl mx-auto mb-16">
          <p className="p text-primary text-center max-w-44 md:max-w-4xl mx-auto">
            {subtitle}
          </p>
          <h2 className="h2 text-gray-800 text-center md:max-w-4xl mx-auto">
            {title}
          </h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="bg-primary w-14 h-0.5"></div>
            <div className="bg-primary w-2 h-0.5"></div>
          </div>
        </div>
      )}

      {/* Services Cards */}
      <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {services.map((service, index) => (
          <div
            key={service.title || index}
            className={`${
              cardLayout === "horizontal"
                ? "flex gap-4"
                : "flex flex-col text-center"
            } p-6 rounded-lg shadow-lg hover:shadow-primary transition-shadow duration-300 mb-4`}
          >
            {service.icon && (
              <img
                src={service.icon}
                alt={service.title}
                className={`w-12 h-12 ${
                  cardLayout === "vertical" ? "mx-auto mb-4" : ""
                }`}
              />
            )}
            <div className={cardLayout === "vertical" ? "text-center" : ""}>
              <h3
                className={`text-xl font-semibold ${
                  cardLayout === "vertical" ? "text-center" : "text-start"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-gray-400 ${
                  cardLayout === "vertical" ? "text-center" : "text-start"
                }`}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
