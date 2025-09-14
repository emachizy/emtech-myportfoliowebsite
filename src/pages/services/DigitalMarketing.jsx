import React from "react";
import HeroBanner from "../../components/HeroBanner";
import LazyImage from "../../components/LazyLoading";
import { m, motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServicesCards from "../../components/ServicesCards";
import seo_icon from "../../assets/seo-icon.svg";

import mobile_app_icon from "../../assets/mobile-app-icon.svg";
import web_development_icon from "../../assets/web-development-icon.svg";
import cms from "../../assets/cms.svg";

import AccordionSection from "../../components/AccordionSection";

import accordion from "/images/accordion.png";
import accordion1 from "/images/accordion1.png";

const faqItems = [
  {
    id: 1,
    question: "What is digital marketing?",
    answer:
      "Digital marketing refers to the use of digital channels, platforms, and technologies to promote products or services to a target audience. It encompasses various strategies such as search engine optimization (SEO), social media marketing, email marketing, content marketing, and online advertising to reach and engage potential customers effectively.",
  },
  {
    id: 2,
    question: "Why is digital marketing important for businesses?",
    answer:
      "Digital marketing is crucial for businesses as it allows them to reach a wider audience, increase brand visibility, and engage with customers in real-time. It provides measurable results, enabling businesses to track the effectiveness of their campaigns and make data-driven decisions. Additionally, digital marketing is often more cost-effective than traditional marketing methods, making it accessible for businesses of all sizes.",
  },
  {
    id: 3,
    question: "What are the key components of a digital marketing strategy?",
    answer:
      "A comprehensive digital marketing strategy typically includes several key components such as SEO, content marketing, social media marketing, email marketing, pay-per-click (PPC) advertising, and analytics. Each component plays a vital role in attracting, engaging, and converting potential customers while also building brand loyalty and trust.",
  },
  {
    id: 4,
    question: "How can I measure the success of my digital marketing efforts?",
    answer:
      "The success of digital marketing efforts can be measured using various key performance indicators (KPIs) such as website traffic, conversion rates, click-through rates (CTR), return on investment (ROI), and customer engagement metrics. Tools like Google Analytics, social media insights, and email marketing platforms provide valuable data to analyze the performance of campaigns and identify areas for improvement.",
  },
  {
    id: 5,
    question: "How often should I update my digital marketing strategy?",
    answer:
      "It's recommended to review and update your digital marketing strategy at least quarterly. However, the frequency may vary based on industry trends, changes in consumer behavior, and the performance of your campaigns. Regularly analyzing your strategy allows you to adapt to new opportunities, address challenges, and ensure that your marketing efforts align with your business goals.",
  },
];

const DigitalMarketing = () => {
  const services = [
    {
      title: "SEO",
      description:
        "We equally focus on all three dimensions of SEO- Technical, On-Page and Off-Page.",
      icon: seo_icon,
    },
    {
      title: "On-Page SEO",
      description:
        "Under On-Page SEO, we target best keywords, create high quality content and optimize them with those keywords at the right place. Your page ranks quickly with low-competition keywords and you reap instant benefits.",
      icon: mobile_app_icon,
    },
    {
      title: "Technical SEO",
      description:
        "Any optimization involving no-content elements comes under this category. For example, we improve your site’s backend structure, readability, and user experience to offer your visitors a quality browsing experience. As a result, you get more traffic and experience better engagement rates.",
      icon: cms,
    },
    {
      title: "Off-Page SEO",
      description:
        "We build your site’s reputation and authority through quality backlinks, social media marketing, influencer outreach, and guest blogging. As a result, your site ranks higher in search results and you get more traffic.",
      icon: web_development_icon,
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <HeroBanner
        title="Digital Marketing Services"
        subtitle="Lagos NG"
        backgroundImage="/images/hero-img/seo.png"
        breadcrumbs={["Services", "Digital Marketing"]}
      />

      {/* Main Content Section */}
      <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="h2 text-black text-center md:text-left">
            <span className="text-primary">
              Lagos Digital Marketing <br />
            </span>
            Company
          </h2>
          <p className="p">
            In today's digital age, having a strong online presence is crucial
            for businesses of all sizes. Digital marketing encompasses a range
            of strategies and techniques designed to promote products or
            services through digital channels. From search engine optimization
            (SEO) to social media marketing, email campaigns, and content
            creation, digital marketing offers a cost-effective way to reach a
            wider audience and drive business growth.
          </p>
          <p className="p">
            At Emtech, we specialize in creating tailored digital marketing
            strategies that align with your business goals. Our team of experts
            leverages the latest tools and technologies to deliver measurable
            results, enhance brand visibility, and engage your target audience
            effectively. Whether you're looking to increase website traffic,
            generate leads, or boost sales, our digital marketing services in
            Lagos are designed to help your business thrive in the competitive
            online landscape.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <LazyImage
            src="/images/seo-img.png"
            alt="digital marketing picture"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>

      {/* Services Cards - Now using reusable component */}
      <ServicesCards
        services={services}
        title="Our Digital Marketing Services in Brampton ON"
        subtitle="Our Offers"
        cardLayout="horizontal"
        showHeader={true}
      />

      {/* Call to Action Banner */}
      <div className="bg-primary mb-24 py-10">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="h2 !mb-0 py-5 text-black/90">
            Leverage the Power of Digital Marketing Today
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6 bg-secondary w-fit mx-auto px-6 py-3 rounded-full text-white hover:bg-white hover:text-secondary transition-colors duration-300 cursor-pointer">
            <Link to="/contact" className="uppercase ">
              Hire Us{" "}
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

export default DigitalMarketing;
