import React from "react";
import HeroBanner from "../../components/HeroBanner";
import LazyImage from "../../components/LazyLoading";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import AccordionSection from "../../components/AccordionSection";

import accordion from "/images/accordion.png";
import accordion1 from "/images/accordion1.png";
import ServicesGrid from "../../components/ServicesGrid";
import ServicesCards from "../../components/ServicesCards";
// import seo_icon from "../../assets/seo-icon.svg";
import web_development_icon from "../../assets/web-development-icon.svg";

import ecommerce from "/images/ecommerce.svg";

// import { services, LegacyMigrationServices } from "../../assets/assets";

const faqItems = [
  {
    id: 1,
    question: "What is legacy system migration?",
    answer:
      "Legacy system migration is the process of transitioning from outdated software or hardware systems to modern, more efficient solutions. This can involve moving data, applications, and processes to new platforms, such as cloud-based services or updated software versions, to improve performance, security, and scalability.",
  },
  {
    id: 2,
    question: "Why is legacy system migration important?",
    answer:
      "Legacy system migration is important because it helps businesses stay competitive in a rapidly evolving technological landscape. Outdated systems can lead to inefficiencies, security vulnerabilities, and increased maintenance costs. Migrating to modern systems can enhance operational efficiency, improve user experience, and enable businesses to leverage new technologies and innovations.",
  },
  {
    id: 3,
    question: "What are the challenges of legacy system migration?",
    answer:
      "Legacy system migration can present several challenges, including data integrity issues, compatibility problems with new systems, and potential downtime during the transition. Additionally, there may be resistance to change from employees accustomed to the old system. Careful planning, thorough testing, and effective communication are essential to address these challenges and ensure a successful migration.",
  },
  {
    id: 4,
    question: "How long does a legacy system migration take?",
    answer:
      "The duration of a legacy system migration can vary significantly depending on factors such as the complexity of the existing system, the amount of data to be migrated, and the specific requirements of the new system. A simple migration may take a few weeks, while more complex migrations can take several months. It's important to conduct a thorough assessment and develop a detailed migration plan to establish a realistic timeline.",
  },
  {
    id: 5,
    question: "How can I ensure a successful legacy system migration?",
    answer:
      "To ensure a successful legacy system migration, it's crucial to conduct a comprehensive assessment of the existing system, identify potential risks and challenges, and develop a detailed migration strategy. Involving key stakeholders, providing adequate training for employees, and conducting thorough testing before going live can also help minimize disruptions and ensure a smooth transition.",
  },
];

const LegacyMigrationServices = [
  { label: "System Assessment", color: "bg-blue-500" },
  { label: "Data Migration", color: "bg-green-500" },
  { label: "Cloud Migration", color: "bg-purple-500" },
  { label: "Application Modernization", color: "bg-orange-500" },
  { label: "Infrastructure Upgrade", color: "bg-blue-500" },
  { label: "Security Enhancement", color: "bg-purple-500" },
  { label: "Compliance Management", color: "bg-blue-500" },
  { label: "Post-Migration Support", color: "bg-green-500" },
];

const services = [
  {
    title: "Core Legacy Migration",
    description:
      "Large IT systems such as Portals or Custom ERP solutions come under this category. They require scalable performance by migrating complex data to a cloud infrastructure.",
    icon: web_development_icon,
  },
  {
    title: "Non-Core Legacy Migration",
    description:
      "It involves migrations of small applications built with light tools, such as Lotus Notes and Microsoft Access, to a centrally governed system.",
    icon: ecommerce,
  },
];

const LegacyMigration = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <HeroBanner
        title="Legacy System Migration "
        subtitle="Lagos NG"
        backgroundImage="/images/hero-img/legacy.webp"
        breadcrumbs={["Services", "Legacy System Migration"]}
      />
      {/* Main Content Section */}
      <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="h2 text-black text-center md:text-left">
            <span className="text-primary">Lagos Legacy System </span>Migration
            Company
          </h2>
          <p className="p">
            In today's rapidly evolving technological landscape, businesses must
            adapt to stay competitive. Legacy system migration is the process of
            transitioning from outdated software or hardware to modern, more
            efficient solutions. This migration is essential for improving
            operational efficiency, enhancing security, and enabling
            scalability.
          </p>
          <p className="p">
            At Emtech, we specialize in legacy system migration services. Our
            team of experts works closely with clients to assess their existing
            systems, identify potential challenges, and develop a tailored
            migration strategy. We ensure a seamless transition with minimal
            disruption to business operations. Whether you're looking to migrate
            to cloud-based solutions, upgrade software platforms, or modernize
            your IT infrastructure, our legacy migration services are designed
            to meet your specific needs and drive business growth.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <LazyImage
            src="/images/legacy.webp"
            alt="legacy migration picture"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>

      <ServicesGrid
        services={LegacyMigrationServices}
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
            Go for a hassle-free Legacy Migration Today
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6 bg-secondary w-fit mx-auto px-6 py-3 rounded-full text-white hover:bg-white hover:text-secondary transition-colors duration-300 cursor-pointer">
            <Link to="/contact" className="uppercase ">
              Request a Quote{" "}
            </Link>
            <FaArrowAltCircleRight size="1em" />
          </div>
        </div>
      </div>

      <AccordionSection
        subtitle="FAQ"
        title="Frequently Asked Questions"
        items={faqItems}
        mainImage={accordion}
        overlayImage={accordion1}
      />
    </motion.section>
  );
};

export default LegacyMigration;
