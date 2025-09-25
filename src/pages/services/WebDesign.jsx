import React from "react";
import HeroBanner from "../../components/HeroBanner";
import LazyImage from "../../components/LazyLoading";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { services } from "../../assets/assets";
// import InteractiveQA from "../../components/InteractiveQA";
// import Accordion from "../../components/Accordion";
import { Link } from "react-router-dom";
import ServicesGrid from "../../components/ServicesGrid";
import ServicesCards from "../../components/ServicesCards";
// import AccordionSection from "../../components/AccordionSection";

import accordion from "/images/accordion.png";
import accordion1 from "/images/accordion1.png";
import AccordionSection from "../../components/AccordionSection";

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

const WebDesign = () => {
  // Web development services data
  const webDevServices = [
    { label: "Graphic Design", color: "bg-blue-500" },
    { label: "Responsive Website Design", color: "bg-green-500" },
    { label: "PHP Web Development", color: "bg-purple-500" },
    { label: "WordPress Development", color: "bg-orange-500" },
    { label: "Joomla Development", color: "bg-blue-500" },
    { label: "Drupal Development", color: "bg-purple-500" },
    { label: "Contentful Development", color: "bg-blue-500" },
    { label: "Content Management Systems (CMS)", color: "bg-orange-500" },
    { label: "Custom Website Development", color: "bg-purple-500" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Hero Banner */}
      <HeroBanner
        title="Web Design And Development"
        subtitle="Lagos NG"
        backgroundImage="/images/hero-img/web-dev-hero.jpg"
        breadcrumbs={["Services", "Web Design"]}
      />

      {/* Main Content Section */}
      <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="h2 text-black text-left">
            <span className="text-primary">Lagos Web Design</span> and
            Development Company
          </h2>
          <p className="p text-left">
            Today, professional website design and development services in
            Nigeria are more important than ever. Effective design improves
            search rankings and conversion rates, supporting sustained business
            growth. A positive user experience not only enhances your brand
            image but also streamlines the sales process, contributing
            significantly to long-term profitability.
          </p>
          <p className="p text-left">
            As a leading web design company in Nigeria, we provide a competitive
            edge through our SEO-friendly website design services. Our team
            leverages over 10 years of combined experience to help you make a
            strong first impression, stand out in your industry, and convert
            high-value leads into customers.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <LazyImage
            src="/images/web-development.svg"
            alt="web development picture"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>

      {/* Services Grid - Now using reusable component */}
      <ServicesGrid
        services={webDevServices}
        title="Lagos Web Design and Development Service"
        subtitle="Enhance your web presence with our bespoke web design service Ask us How"
        gridCols="grid-cols-1 sm:grid-cols-3 md:grid-cols-4"
        showAnimation={true}
      />

      {/* Services Cards - Now using reusable component */}
      <ServicesCards
        services={services}
        title="What you will get"
        subtitle="We Offers"
        cardLayout="horizontal"
        showHeader={true}
      />

      {/* Call to Action Banner */}
      <div className="bg-primary mb-24 py-10">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="h2 !mb-0 py-5 text-black/90">
            Create a performance-driven website
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6 bg-secondary w-fit mx-auto px-6 py-3 rounded-full text-white hover:bg-white hover:text-secondary transition-colors duration-300 cursor-pointer">
            <Link to="/contact" className="uppercase ">
              Request a Quote{" "}
            </Link>
            <FaArrowAltCircleRight size="1em" />
          </div>
        </div>
      </div>

      {/* Accordion Component */}
      <AccordionSection
        subtitle="FAQ"
        title="Frequently Asked Questions"
        items={faqItems}
        mainImage={accordion}
        overlayImage={accordion1}
      />

      {/* Final Call to Action */}
      <div className="bg-primary mb-24 py-10">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="h2 !mb-0 py-5 text-black/90">Request a Quote</h2>
          <p className="p text-black/90 mx-auto">
            Want to create a website that drives results and customer
            satisfaction?
          </p>
          <p className="p text-black/90 mx-auto">
            Contact Us online or give us a call on{" "}
            <span className="text-2xl text-black/90 font-bold">
              +2348165257534
            </span>{" "}
            and one of our strategist will get back to you within 12 hours.
          </p>
          <div className="flex justify-center items-center gap-4 mt-6 bg-secondary w-fit mx-auto px-6 py-3 rounded-full text-white hover:bg-white hover:text-secondary transition-colors duration-300 cursor-pointer">
            <Link to="/contact" className="uppercase ">
              Request a Quote{" "}
            </Link>
            <FaArrowAltCircleRight size="1em" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WebDesign;
