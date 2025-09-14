import React from "react";
import HeroBanner from "../../components/HeroBanner";
import LazyImage from "../../components/LazyLoading";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServicesGrid from "../../components/ServicesGrid";
import ServicesCards from "../../components/ServicesCards";
import seo_icon from "../../assets/seo-icon.svg";
import web_development_icon from "../../assets/web-development-icon.svg";
import mobile_app_icon from "../../assets/mobile-app-icon.svg";
// import ui_ux_design_icon from "../../assets/ui-ux-design-icon.svg";
// import ecommerce from "/images/ecommerce.svg";
import cms from "../../assets/cms.svg";
import { CiSearch } from "react-icons/ci";

import AccordionSection from "../../components/AccordionSection";

import accordion from "/images/accordion.png";
import accordion1 from "/images/accordion1.png";

const faqItems = [
  {
    id: 1,
    question: "What is e-commerce development?",
    answer:
      "E-commerce development refers to the process of creating and maintaining online platforms that facilitate buying and selling products or services over the internet. This includes designing user-friendly interfaces, integrating secure payment gateways, managing product catalogs, and ensuring a seamless shopping experience for customers.",
  },
  {
    id: 2,
    question: "Why is e-commerce development important for businesses?",
    answer:
      "E-commerce development is crucial for businesses as it enables them to reach a wider audience, operate 24/7, and provide a convenient shopping experience. A well-developed e-commerce platform can drive sales, enhance customer engagement, and foster brand loyalty, ultimately contributing to business growth.",
  },
  {
    id: 3,
    question: "What are some popular e-commerce platforms?",
    answer:
      "Some popular e-commerce platforms include WooCommerce, Magento, Shopify, BigCommerce, and PrestaShop. Each platform offers unique features and capabilities, allowing businesses to choose the one that best fits their needs and goals.",
  },
  {
    id: 4,
    question: "How can I ensure the security of my e-commerce website?",
    answer:
      "To ensure the security of your e-commerce website, it's essential to implement SSL certificates for secure data transmission, use strong authentication methods, regularly update software and plugins, and comply with data protection regulations. Additionally, integrating secure payment gateways and conducting regular security audits can help safeguard your platform against potential threats.",
  },
  {
    id: 5,
    question: "Can I customize my e-commerce platform?",
    answer:
      "Yes, most e-commerce platforms offer customization options that allow businesses to tailor their online stores to reflect their brand identity and meet specific requirements. This can include customizing the design, layout, features, and functionalities of the platform to enhance user experience and align with business goals.",
  },
];

const Ecommerce = () => {
  const ecomPlatforms = [
    { label: "Woo-Commerce Development", color: "bg-blue-500" },
    { label: "Magento Development", color: "bg-green-500" },
    { label: "Prestashop Development", color: "bg-purple-500" },
    { label: "Shopify Development", color: "bg-orange-500" },
    { label: "Magento 2 Development", color: "bg-blue-500" },
    { label: "Volusion Development", color: "bg-purple-500" },
    { label: "BigCommerce Development", color: "bg-orange-500" },
    { label: "Opencart Development", color: "bg-blue-500" },
    { label: "Squarespace Developmentt", color: "bg-purple-500" },
    { label: "Custom E-commerce Development", color: "bg-purple-500" },
  ];

  const services = [
    {
      title: "Extensive research",
      description:
        "To create a competitive advantage for your business, we brainstorm powerful strategies by better understanding your customer behavior and their purchasing habits. As a result, you mitigate risks and deliver intuitive shopping experience to your customers.",
      icon: <CiSearch size={40} className="text-primary mb-4" />,
    },
    {
      title: "Mobile Friendly",
      description:
        "We make your online store mobile-first and well optimized for voice search to attract more mobile shoppers. With a mobile-friendly website, you improve shopping experience and in return, generate more sales.",
      icon: mobile_app_icon,
    },
    {
      title: "Powerful Platforms",
      description:
        "Our team has harnessed skills to flair on any major ecommerce platform you name such as WooCommerce, Magento or Sitefinity. Besides, we offer customized solutions too. With tailored features and powerful admin tools, you stay a step ahead of the competition.",
      icon: cms,
    },
    {
      title: "Seamless Integration",
      description:
        "A smooth running e-store always has seamless integration as one of its unique characteristics. Thus we ensure seamless and secure integration of CRM, inventory management, payment gateways, POS, etc. to secure your success in long run.",
      icon: seo_icon,
    },
    {
      title: "Website Migration",
      description:
        "We provide no-stress ecommerce website migration. The team joins you to develop a to-do checklist. We create a step by step plan to smoothly transit your website, without losing your hard-earned SEO Rankings.",
    },
    {
      title: "Continuous Support",
      description:
        "Our team support does not end when your e-store goes live. Instead, we continuously follow up for periodic maintenance of your store or for any kind of assistance you might need in the middle of the night.",
      icon: mobile_app_icon,
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
        title="E-commerce Development Services"
        subtitle="Lagos NG"
        backgroundImage="/images/hero-img/ecom-img.webp"
        breadcrumbs={["Services", "E-commerce"]}
      />
      {/* Main Content Section */}
      <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="h2 text-black text-center md:text-left">
            <span className="text-primary">Lagos E-commerce </span>Development
            Company
          </h2>
          <p className="p">
            In today's digital age, e-commerce has become a vital component of
            business success. E-commerce development involves creating online
            platforms that facilitate buying and selling products or services
            over the internet. A well-designed e-commerce website not only
            enhances user experience but also drives sales and fosters customer
            loyalty.
          </p>
          <p className="p">
            At Emtech, we specialize in e-commerce development services in
            Lagos. Our team of skilled developers and designers work closely
            with clients to create customized e-commerce solutions that align
            with their business goals. From user-friendly interfaces to secure
            payment gateways, we ensure that every aspect of your e-commerce
            platform is optimized for performance and scalability. Whether
            you're a small business looking to establish an online presence or a
            large enterprise seeking to enhance your existing e-commerce
            capabilities, our services are tailored to meet your unique needs
            and drive business growth.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <LazyImage
            src="/images/seo-img.png"
            alt="ecommerce development picture"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>

      {/* Services Grid - Now using reusable component */}
      <ServicesGrid
        services={ecomPlatforms}
        title="Popular E-Commerce Platforms We Work On"
        subtitle="Popular Platforms We Work On"
        gridCols="grid-cols-1 sm:grid-cols-3 md:grid-cols-4"
        showAnimation={true}
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

      {/* Services Cards - Now using reusable component */}
      <ServicesCards
        services={services}
        title="E-commerce Web Design & Development Services in Lagos"
        subtitle="We Offers"
        cardLayout="horizontal"
        showHeader={true}
      />

      {/* Call to Action Banner */}
      <div className="bg-primary mb-24 py-10">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="h2 !mb-0 py-5 text-black/90">
            Create Bespoke User Experience for Easy Sales
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6 bg-secondary w-fit mx-auto px-6 py-3 rounded-full text-white hover:bg-white hover:text-secondary transition-colors duration-300 cursor-pointer">
            <Link to="/contact" className="uppercase ">
              Let's talk{" "}
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

export default Ecommerce;
