import React from "react";
import { motion } from "framer-motion";
import { companies, services } from "../assets/assets";
import Waves from "../components/utils/Waves";

import AccordionSection from "../components/AccordionSection";

import accordion from "/images/accordion.png";
import accordion1 from "/images/accordion1.png";
import HeroBanner from "../components/HeroBanner";

const faqItems = [
  {
    id: 1,
    question: "Will my website look same on all computers?",
    answer:
      "Yes, we make sure that by handling a lot of factors such as loading speed, simple architecture, browser compatibility, etc. This makes sure your visitors will have a great user experience on your website irrespective of internet speed, browser type and size of thir computers.",
  },
  {
    id: 2,
    question: "What is CMS?",
    answer:
      "CMS stands for Content Management System. It is a software application that allows users to create, manage, and modify digital content on a website without needing specialized technical knowledge. Popular CMS platforms include WordPress, Joomla, and Drupal.",
  },
  {
    id: 3,
    question: "Will my site work on all types of phones and iPads?",
    answer:
      "Yes, we make sure that your website is responsive and works on all types of devices including phones, tablets, iPads and desktops.",
  },
  {
    id: 4,
    question: "What is web hosting?",
    answer:
      "Web hosting is a service that allows individuals and organizations to make their websites accessible via the internet. Web hosts provide the technologies and services needed for the website to be viewed online, including server space, bandwidth, and security features.",
  },
  {
    id: 5,
    question: "Will my site be SEO friendly?",
    answer:
      "Yes, we ensure that your website is optimized for search engines (SEO) to improve its visibility and ranking on search engine results pages. This includes using best practices in coding, content creation, and site structure to enhance your site's SEO performance.",
  },
];

const Services = () => {
  return (
    <>
      <HeroBanner
        title="Service"
        subtitle="Lagos NG"
        backgroundImage="/images/hero-img/ecom-img.webp"
        breadcrumbs={["Services"]}
      />

      <motion.section
        className="relative w-full min-h-screen bg-gray-50 py-20 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {/* Background Waves */}
        <Waves
          lineColor="#c49102"
          backgroundColor="rgba(252, 252, 252, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />

        {/* Content container */}
        <div className="relative w-full max-w-[95vw] mx-auto rounded-4xl bg-gray-100 pt-10 pb-24 px-4  shadow-lg">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-start text-3xl font-bold text-gray-800">
              What I do
            </h2>
            <div className="bg-gray-200 w-28 h-0.5 rounded-full mt-2">
              <div className="bg-primary h-0.5 w-10 rounded-full" />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:px-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-primary/40 transition-shadow duration-300"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clients */}
          <div className="mt-12">
            <div className="mb-12">
              <h2 className="text-start text-3xl font-bold text-gray-800">
                Clients
              </h2>
              <div className="bg-gray-200 w-24 h-0.5 rounded-full mt-2">
                <div className="bg-primary h-0.5 w-10 rounded-full" />
              </div>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-6 rounded-full">
              {companies.map((company) => (
                <img
                  key={company.id}
                  src={company.logo}
                  alt={company.name}
                  className="w-20 h-20 object-contain rounded-full bg-white p-0.5 shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              ))}
            </div>
          </div>

          <AccordionSection
            subtitle="FAQ"
            title="Frequently Asked Questions"
            items={faqItems}
            mainImage={accordion}
            overlayImage={accordion1}
          />
        </div>
      </motion.section>
    </>
  );
};

export default Services;
