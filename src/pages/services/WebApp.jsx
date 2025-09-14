import React from "react";
import HeroBanner from "../../components/HeroBanner";
import LazyImage from "../../components/LazyLoading";
import ServicesGrid from "../../components/ServicesGrid";
import ServicesCards from "../../components/ServicesCards";
// import { services } from "../../assets/assets";
import seo_icon from "../../assets/seo-icon.svg";
import web_development_icon from "../../assets/web-development-icon.svg";
import mobile_app_icon from "../../assets/mobile-app-icon.svg";
import ui_ux_design_icon from "../../assets/ui-ux-design-icon.svg";
import ecommerce from "/images/ecommerce.svg";
import cms from "../../assets/cms.svg";
// import mobile_interface from "/images/mobile-interface.svg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AccordionSection from "../../components/AccordionSection";

import accordion from "/images/accordion.png";
import accordion1 from "/images/accordion1.png";

const webAppServices = [
  { label: "Zend Development", color: "bg-blue-500" },
  { label: "CodeIgniter Development", color: "bg-green-500" },
  { label: "Yii Development", color: "bg-purple-500" },
  { label: "CakePHP Development", color: "bg-orange-500" },
  { label: "Laravel Development", color: "bg-blue-500" },
  { label: "Django Development", color: "bg-purple-500" },
];

const services = [
  {
    title: "Custom Web App Development",
    description:
      "We tailor web applications to automate your business challenges. With a custom design, you achieve better scalability to address complex problems for a smooth sailing.",
    icon: web_development_icon,
  },
  {
    title: "E Commerce Web App Development",
    description:
      "We recommend this solution to enterprises running ecommerce business in global market. You get complete control portal with shopping, secure payment.",
    icon: ecommerce,
  },
  {
    title: "Web App CMS",
    description:
      "Under this service, we take care of your content management system in your web applications. Our experts update and align elements to offer new look to the site from time to time.",
    icon: cms,
  },
  {
    title: "Web App Reengineering",
    description:
      "If you have an existing web application and want to give it a new makeover, we are readily available. We will make sure you scale in design without hampering your earned SEO at any cost.",
    icon: seo_icon,
  },
  {
    title: "Database Integration",
    description:
      "We provide seamless database integration services tailored to your needs. From basic to advanced solutions, we'll recommend and implement the perfect database structure based on your business requirements.",
  },
  {
    title: "Ecommerce Functionality",
    description:
      "Transform your website into a powerful online store. We implement comprehensive e-commerce solutions with secure payment processing, inventory management, and sales monitoring through an intuitive dashboard.",
    icon: mobile_app_icon,
  },
  {
    title: "Content Management System",
    description:
      "Enhance your content strategy with a custom CMS solution. We build flexible, scalable systems that match your specific needs, whether you need a standard, advanced, or enterprise-level platform.",
    icon: ui_ux_design_icon,
  },
];

const faqItems = [
  {
    id: 1,
    question: "What is the best way to develop web applications?",
    answer:
      "There are several approaches to web application development, including using frameworks like React, Angular, or Vue.js for the frontend, and Node.js, Django, or Ruby on Rails for the backend. The best approach depends on your specific project requirements, budget, and timeline. Consulting with a professional web development team can help you choose the most suitable method.",
  },
  {
    id: 2,
    question: "How do I host a Web application?",
    answer:
      " There are several ways to host a web application, including using cloud services like AWS, Google Cloud, or Azure, or traditional web hosting providers like Bluehost or HostGator. The best option depends on your application's requirements, budget, and expected traffic. It's important to consider factors like scalability, security, and ease of management when choosing a hosting solution.",
  },
  {
    id: 3,
    question:
      "What is the difference between Web Application and Mobile Application?",
    answer:
      " A web application is accessed through a web browser and can be used on any device with internet connectivity, while a mobile application is specifically designed for mobile devices and is downloaded from app stores. Web applications are typically more versatile and easier to update, while mobile applications can offer better performance and access to device features.",
  },
  {
    id: 4,
    question: "Can I review the code during the development process?",
    answer:
      "Yes, most development teams follow an agile methodology that allows for regular code reviews and updates throughout the development process. This ensures that you can provide feedback and make adjustments as needed to ensure the final product meets your expectations.",
  },
  {
    id: 5,
    question: "How many design revisions do you provide?",
    answer:
      "The number of design revisions can vary depending on the project scope and agreement with the development team. Typically, teams offer a set number of revisions (e.g., 2-3) as part of the project package, but this can be negotiated based on your needs.",
  },
  {
    id: 6,
    question: "Can we manage our website support independently?",
    answer:
      "Yes, many web applications are built with user-friendly content management systems (CMS) that allow you to manage and update your website independently. Additionally, development teams often provide training and documentation to help you navigate the CMS effectively.",
  },
];

const WebApp = () => {
  return (
    <section>
      {/* Web Design Example */}
      <HeroBanner
        title="Web Application Development Services"
        subtitle="Lagos NG"
        backgroundImage="/images/hero-img/web-app-img.webp"
        breadcrumbs={["Services", "Web App"]}
      />
      {/* Main Content Section */}
      <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="h2 text-black text-center md:text-left">
            <span className="text-primary">
              Lagos Web Application <br />
            </span>
            Development Company
          </h2>
          <p className="p">
            Web application development enables your business to establish a
            strong online presence across all user devices. Cross-platform
            compatibility ensures a seamless browsing experience for your
            customers. Server-side updates allow you to deliver improvements to
            users efficiently. An app-ready business model positions your
            business to reach a wider audience and overcome market challenges.
          </p>
          <p className="p">
            At Emtech, we develop customized web applications with a focus on
            cost efficiency. Our services in Lagos emphasize robust database
            integration, an enhanced user experience, and reliable browser
            performance. We also implement advanced security measures to protect
            your applications from unauthorized access.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <LazyImage
            src="/images/web-app.svg"
            alt="web development picture"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>

      {/* Services Grid - Now using reusable component */}
      <ServicesGrid
        services={webAppServices}
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
            Convert your idea to architecture
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
    </section>
  );
};

export default WebApp;
