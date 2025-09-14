import React from "react";
import HeroBanner from "../../components/HeroBanner";
import LazyImage from "../../components/LazyLoading";
import { motion } from "framer-motion";
import GrowthSection from "../../components/GrowthSection";
import ServicesGrid from "../../components/ServicesGrid";

import AccordionSection from "../../components/AccordionSection";

import accordion from "/images/accordion.png";
import accordion1 from "/images/accordion1.png";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const faqItems = [
  {
    id: 1,
    question: "How does Instagram growth work?",
    answer:
      "Instagram growth involves strategies and techniques aimed at increasing your follower count, engagement rates, and overall visibility on the platform. This can include content optimization, targeted interactions, and leveraging Instagram's features to reach a broader audience.",
  },
  {
    id: 2,
    question: "Is Instagram growth safe?",
    answer:
      "Yes, when done correctly, Instagram growth is safe. It's important to follow Instagram's guidelines and avoid using bots or other automated tools that violate their terms of service. Focus on organic growth strategies that build genuine engagement.",
  },
  {
    id: 3,
    question: "How long does it take to see results?",
    answer:
      "The time it takes to see results from Instagram growth efforts can vary based on factors such as your current follower count, the quality of your content, and the strategies you implement. Generally, you may start noticing improvements within a few weeks to a couple of months.",
  },
  {
    id: 4,
    question: "Can I manage my Instagram growth independently?",
    answer:
      "Yes, you can manage your Instagram growth independently by consistently posting high-quality content, engaging with your audience, and utilizing Instagram's features effectively. However, many businesses choose to work with professionals to optimize their growth strategies.",
  },
  {
    id: 5,
    question: "What type of content should I post for better growth?",
    answer:
      "For better Instagram growth, focus on posting a mix of high-quality images, engaging videos, and interactive content such as stories and reels. Tailor your content to your target audience's interests and preferences, and maintain a consistent posting schedule.",
  },
];

const InstagramGrowth = () => {
  const difference = [
    { label: "Authentic Engagement Focus", color: "bg-blue-500" },
    { label: "Tailored Growth Strategies", color: "bg-green-500" },
    { label: "Complete Account Safety", color: "bg-purple-500" },
    { label: "Dedicated Human Support", color: "bg-orange-500" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <HeroBanner
        title="Instagram Growth Services"
        subtitle="Lagos NG"
        backgroundImage="/images/hero-img/instagram-img.webp"
        breadcrumbs={["Services", "Instagram Growth"]}
      />
      {/* Main Content Section */}
      <GrowthSection />

      {/* Services Grid - Now using reusable component */}
      <ServicesGrid
        services={difference}
        title="What Makes Us Different"
        subtitle=""
        gridCols="grid-cols-1 sm:grid-cols-3 md:grid-cols-4"
        showAnimation={true}
      />

      <AccordionSection
        subtitle="FAQ"
        title="Frequently Asked Questions"
        items={faqItems}
        mainImage={accordion}
        overlayImage={accordion1}
      />

      {/* Call to Action Banner */}
      <div className="bg-primary mb-24 py-10">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="h2 !mb-0 py-5 text-black/90">
            Create a performance-driven website
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6 bg-secondary w-fit mx-auto px-6 py-3 rounded-full text-white hover:bg-white hover:text-secondary transition-colors duration-300 cursor-pointer">
            <Link to="/contact" className="uppercase ">
              Let's talk{" "}
            </Link>
            <FaArrowAltCircleRight size="1em" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InstagramGrowth;
