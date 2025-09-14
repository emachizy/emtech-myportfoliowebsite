import React from "react";
import HeroBanner from "../../components/HeroBanner";
import LazyImage from "../../components/LazyLoading";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServicesCards from "../../components/ServicesCards";
// import seo_icon from "../../assets/seo-icon.svg";

import AccordionSection from "../../components/AccordionSection";

import accordion from "/images/accordion.png";
import accordion1 from "/images/accordion1.png";

import mobile_app_icon from "../../assets/mobile-app-icon.svg";

import cms from "../../assets/cms.svg";
import web_development_icon from "../../assets/web-development-icon.svg";

const faqItems = [
  {
    id: 1,
    question: "What are the different types of mobile apps?",
    answer:
      "There are three main types of mobile apps: Native Apps, Web Apps, and Hybrid Apps. Native apps are developed specifically for a particular operating system (iOS or Android) using platform-specific programming languages. Web apps are accessed through mobile browsers and are built using web technologies like HTML, CSS, and JavaScript. Hybrid apps combine elements of both native and web apps, allowing them to run on multiple platforms using a single codebase.",
  },
  {
    id: 2,
    question: "How long does it take to develop a mobile app?",
    answer:
      "The development timeline for a mobile app can vary significantly based on factors such as the app's complexity, features, design requirements, and the development team's expertise. On average, a simple app may take around 2-3 months to develop, while more complex apps with advanced features can take 6 months or longer. It's essential to discuss your specific requirements with the development team to get a more accurate estimate.",
  },
  {
    id: 3,
    question: "What platforms do you develop mobile apps for?",
    answer:
      "We develop mobile apps for both major platforms: iOS and Android. Depending on your target audience and business goals, we can create native apps for each platform or develop hybrid apps that work across both platforms using a single codebase.",
  },
  {
    id: 4,
    question: "How do you ensure the security of mobile apps?",
    answer:
      "We prioritize security in our mobile app development process by implementing best practices such as data encryption, secure authentication methods, regular security audits, and compliance with industry standards. We also stay updated on the latest security threats and vulnerabilities to ensure that your app remains secure against potential risks.",
  },
  {
    id: 5,
    question: "Can you help with app store submission and marketing?",
    answer:
      "Yes, we can assist you with the app store submission process, including preparing the necessary documentation, optimizing your app listing for better visibility, and ensuring compliance with app store guidelines. Additionally, we offer marketing services to help promote your app and reach your target audience effectively.",
  },
];

const MobileApp = () => {
  const services = [
    {
      title: "Native Apps",
      description:
        "We build apps specific for any particular native application such as Android or iOS. They can’t run on the cross-device platform- say, you can’t run an iOS app on the Blackberry app. They are faster, and offer a broad choice of device access such as contacts, camera, Bluetooth and more. Technology used: Java, Kotlin, Python, Swift, Objective C.",
      icon: mobile_app_icon,
    },
    {
      title: "Web Apps",
      description:
        "These are the same as native apps but are accessed through a mobile browser. We can develop such an app to improve your cross-platform performance. With a web app, you can authorize users, send them push notifications and can receive payments as well. Technology Used: HTML5, CSS, JavaScript, Ruby.",
      icon: web_development_icon,
    },
    {
      title: "Hybrid Apps",
      description:
        "If you want to build an app on a single code base for users with a slower internet connection, we can develop a Hybrid app for your business. With all features of native app, it delivers extra perks such as responsive design, blazing-fast performance, hassle-free user experience. Technology Used: Ionic, Objective C, Swift, HTML5.",
      icon: cms,
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
        title="Mobile App Development"
        subtitle="Lagos NG"
        backgroundImage="/images/hero-img/mobile-app.png"
        breadcrumbs={["Services", "Mobile App"]}
      />

      {/* Main Content Section */}
      <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="h2 text-black text-center md:text-left">
            <span className="text-primary">
              Lagos Mobile Application <br />
            </span>
            Development Company
          </h2>
          <p className="p">
            Today mobile apps are going through the same phase that websites
            went through fourteen years back. With 80% traffic coming from
            mobile, it has gone imperative to have a mobile app of your business
            more than ever. Having a mobile application gives you a massive
            users base inspired by mobile browsing. The same rule applies to all
            types of market- regional, national and international. When users
            feel it easy to browse your products or access your service through
            an app- that a web browser fails to offer, you mint nothing but
            profit. When the mobile app development booming, BCloud helps
            aspiring entrepreneurs like you to build robust mobile applications
            to stay ahead of competitors with ease. If you are into social
            marketing or e-commerce, then an app-ready business is barely
            essential.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <LazyImage
            src="/images/mobile-app-dev.png"
            alt="web development picture"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>

      <div className="max-w-2xl my-16 px-4 md:px-14">
        <h2 className="h2 text-left mb-10">
          Want to know more about our Mobile App Development?
        </h2>
        <div className="flex justify-start items-center gap-4 mt-6 bg-secondary w-fit px-6 py-3 rounded-full text-white hover:bg-white hover:text-secondary transition-colors duration-300 cursor-pointer">
          <Link to="/contact" className="uppercase ">
            Call Us{" "}
          </Link>
          <FaArrowAltCircleRight size="1em" />
        </div>
      </div>

      {/* Services Cards - Now using reusable component */}
      <ServicesCards
        services={services}
        title="Mobile Application Development Services"
        subtitle="Our Offers"
        cardLayout="horizontal"
        showHeader={true}
      />

      {/* Call to Action Banner */}
      <div className="bg-primary mb-24 py-10">
        <div className="w-[90%] mx-auto text-center">
          <h2 className="h2 !mb-0 py-5 text-black/90">
            Know which type of App is the best for You
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6 bg-secondary w-fit mx-auto px-6 py-3 rounded-full text-white hover:bg-white hover:text-secondary transition-colors duration-300 cursor-pointer">
            <Link to="/contact" className="uppercase ">
              Let's Talk{" "}
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

export default MobileApp;
