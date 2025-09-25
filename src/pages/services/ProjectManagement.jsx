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
import seo_icon from "../../assets/seo-icon.svg";
import web_development_icon from "../../assets/web-development-icon.svg";
import mobile_app_icon from "../../assets/mobile-app-icon.svg";

const faqItems = [
  {
    id: 1,
    question: "What is project management?",
    answer:
      "Project management is the process of planning, organizing, and overseeing resources to achieve specific goals within defined constraints such as time, budget, and scope. It involves coordinating tasks, managing teams, and ensuring that projects are completed efficiently and effectively.",
  },
  {
    id: 2,
    question: "Why is project management important for businesses?",
    answer:
      "Project management is crucial for businesses as it helps ensure that projects are completed on time, within budget, and to the desired quality standards. It enables effective resource allocation, risk management, and communication among stakeholders, ultimately contributing to the successful execution of initiatives and the achievement of business objectives.",
  },
  {
    id: 3,
    question: "What project management methodologies do you use?",
    answer:
      "We utilize a variety of project management methodologies, including Agile, Scrum, Waterfall, and Kanban, depending on the specific needs and requirements of each project. Our team is flexible and adaptable, allowing us to choose the most suitable approach to ensure successful project delivery.",
  },
  {
    id: 4,
    question: "How do you ensure effective communication during a project?",
    answer:
      "We prioritize clear and consistent communication throughout the project lifecycle. This includes regular status updates, progress reports, and meetings with stakeholders to discuss project milestones, challenges, and any changes in scope. We also utilize collaboration tools to facilitate real-time communication and ensure that all team members are aligned and informed.",
  },
  {
    id: 5,
    question: "Can you manage projects of all sizes and industries?",
    answer:
      "Yes, we have experience managing projects of various sizes and across different industries. Our team is skilled in adapting project management practices to suit the unique requirements of each project, whether it's a small-scale initiative or a large, complex undertaking.",
  },
];

const projectManagementServices = [
  { label: "Project Planning & Scheduling", color: "bg-blue-500" },
  { label: "Risk Management", color: "bg-green-500" },
  { label: "Resource Allocation", color: "bg-purple-500" },
  { label: "Stakeholder Management", color: "bg-orange-500" },
  { label: "Quality Assurance", color: "bg-blue-500" },
  { label: "Project Monitoring & Control", color: "bg-purple-500" },
  { label: "Change Management", color: "bg-blue-500" },
  { label: "Project Portfolio Management", color: "bg-orange-500" },
  { label: "Agile Project Management", color: "bg-purple-500" },
  { label: "Project Recovery Services", color: "bg-green-500" },
  { label: "PMO Setup & Operation", color: "bg-blue-500" },
  { label: "Project Performance Analysis", color: "bg-orange-500" },
];

const services = [
  {
    title: "Implementation and Enhancement of PPM",
    description:
      "Implementation and Enhancement of PPM Develop project prioritization, PPM analysis process, portfolio balance, etc.Allocate portfolio projects to strategic goals and manage leadership.",
    icon: web_development_icon,
  },
  {
    title: "PPM Software Selection",
    description:
      "Understand new software solutions, implement end-to-end PPM software with project management, and integrate it with other technology.",
    icon: seo_icon,
  },
  {
    title: "PPM/PMO Maturity Assessment",
    description:
      "Analyses current methodologies and tools while focusing on project management, change management, PPM, and strategy. Also, evaluate the effectiveness of communication, and decision-making.",
    icon: mobile_app_icon,
  },
  {
    title: "Modify and Develop",
    description:
      "Modify and Develop PM processes, communication strategies, Tools, governance. Provide PMO director leadership, PM staff, etc.",
    icon: web_development_icon,
  },
];

const ProjectManagement = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <HeroBanner
        title="Project Management Services"
        subtitle="Lagos NG"
        backgroundImage="/images/hero-img/project-manage.png"
        breadcrumbs={["Services", "Project Management"]}
      />
      {/* Main Content Section */}
      <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="h2 text-black text-left">
            <span className="text-primary">Lagos Project </span>Management
            Company
          </h2>
          <p className="p text-left">
            In today's fast-paced business environment, effective project
            management is crucial for the successful execution of initiatives.
            Project management involves planning, organizing, and overseeing
            resources to achieve specific goals within defined constraints such
            as time, budget, and scope. It ensures that projects are completed
            efficiently, on time, and within budget while meeting quality
            standards.
          </p>
          <p className="p text-left">
            At Emtech, we offer comprehensive project management services in
            Lagos that cater to businesses of all sizes. Our team of experienced
            project managers utilizes industry best practices and methodologies
            to deliver successful outcomes. From project initiation and planning
            to execution, monitoring, and closure, we provide end-to-end project
            management solutions that align with your business objectives.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <LazyImage
            src="/images/project-management-img.webp"
            alt="project management picture"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-primary mb-24 py-10">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="h2 !mb-0 py-5 text-black/90">
            Need to get your product to market without waiting any further?
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6 bg-secondary w-fit mx-auto px-6 py-3 rounded-full text-white hover:bg-white hover:text-secondary transition-colors duration-300 cursor-pointer">
            <Link to="/contact" className="uppercase ">
              Call Us{" "}
            </Link>
            <FaArrowAltCircleRight size="1em" />
          </div>
        </div>
      </div>

      <ServicesCards
        services={services}
        title="What you will get"
        subtitle="We Offers"
        cardLayout="horizontal"
        showHeader={true}
      />

      <ServicesGrid
        services={projectManagementServices}
        title="Lagos Web Design and Development Service"
        subtitle="Enhance your web presence with our bespoke web design service Ask us How"
        gridCols="grid-cols-1 sm:grid-cols-3 md:grid-cols-4"
        showAnimation={true}
      />

      {/* Services Cards - Now using reusable component */}

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

export default ProjectManagement;
