import React from "react";
import { IoIosPhotos } from "react-icons/io";
import QnAAccordion from "./QnAAccordion"; // new reusable accordion
import LazyImage from "./LazyLoading";

// Example props-driven Accordion Section
const AccordionSection = ({
  subtitle = "Get best IT solution",
  title = "Trust Our Best IT Solution For Your Business",
  icon: Icon = IoIosPhotos,
  items = [],
  mainImage,
  overlayImage,
}) => {
  return (
    <section
      className="accordion w-[90%] mx-auto my-20 overflow-hidden"
      aria-labelledby="accordion-heading"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-[55%] order-2 lg:order-1 relative min-h-[300px] pb-16 lg:pb-0">
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="relative z-0 w-full"
          >
            {mainImage && (
              <LazyImage
                src={mainImage}
                alt="Main visual representation"
                className="w-[400px] max-w-[600px] h-auto mx-auto rounded-lg shadow-md object-contain"
                loading="lazy"
              />
            )}
          </div>
          {overlayImage && (
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="absolute bottom-0 left transform lg:static lg:ml-12 lg:mt-[-70px] z-10 max-w-[90%] lg:max-w-none"
            >
              <LazyImage
                src={overlayImage}
                alt="Overlay showcase"
                className="w-[120px] sm:w-[220px] lg:w-[350px] h-auto bg-white p-2 lg:p-3 rounded-lg shadow-xl border border-gray-100 object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div
          className="w-full lg:w-[45%] order-1 lg:order-2 text-center lg:text-left"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div className="mb-6">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              {Icon && (
                <Icon
                  className="text-xl text-primary flex-shrink-0"
                  aria-hidden="true"
                />
              )}
              <span className="text-lg text-primary font-medium">
                {subtitle}
              </span>
            </div>
            <h2
              id="accordion-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            >
              {title}
            </h2>
          </div>

          {/* Accordion Component */}
          <div className="mt-8">
            <QnAAccordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
