import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code,
  Palette,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import InteractiveQA from "../components/InteractiveQA";
import { funFacts } from "../assets/assets";
import { InfiniteTestimonials } from "../components/InfiniteTestimonials";
import NewsLetter from "../components/NewsLetter";
import ProcessSection from "../components/ProcessSection";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import LatestBlog from "../components/LatestBlog";

// const services = [
//   {
//     icon: Code,
//     title: "Web Development",
//     description:
//       "Modern, responsive websites built with the latest technologies",
//     features: ["React & Next.js", "Performance Optimized", "SEO Ready"],
//   },
//   {
//     icon: Palette,
//     title: "UI/UX Design",
//     description:
//       "Beautiful, user-centered designs that convert visitors to customers",
//     features: ["Modern Design", "User Research", "Prototyping"],
//   },
//   {
//     icon: Zap,
//     title: "E-commerce Solutions",
//     description:
//       "Complete online stores that drive sales and grow your business",
//     features: ["Payment Integration", "Inventory Management", "Analytics"],
//   },
// ];

const ModernHomePage = () => {
  const qaRef = useRef(null);

  const scrollToQA = () => {
    qaRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const { ref, inView } = useInView({ triggerOnce: true });
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern, responsive websites built with the latest technologies",
      features: ["React & Next.js", "Performance Optimized", "SEO Ready"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, user-centered designs that convert visitors to customers",
      features: ["Modern Design", "User Research", "Prototyping"],
    },
    {
      icon: Zap,
      title: "E-commerce Solutions",
      description:
        "Complete online stores that drive sales and grow your business",
      features: ["Payment Integration", "Inventory Management", "Analytics"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 responsive-grid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 0.1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 0.1px)
          `,
          backgroundColor: "#f9fafb",
        }}
      >
        {/* Responsive background-size */}
        <style>
          {`
            section.responsive-grid {
              background-size: 20px 20px; /* tighter on mobile */
            }
            @media (min-width: 640px) {
              section.responsive-grid {
                background-size: 30px 30px; /* small screens */
              }
            }
            @media (min-width: 1024px) {
              section.responsive-grid {
                background-size: 50px 50px; /* larger on desktop */
                
              }
            }
          `}
        </style>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4 animate-bounce">
                👋 Welcome to EmTech
              </span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block"
              >
                Building Digital
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="block bg-gradient-to-r from-black via-yellow-600 to-yellow-800 bg-clip-text text-transparent"
              >
                Experiences
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.3,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="block"
              >
                That
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.8,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="inline-block ml-2 relative"
                >
                  Matter
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 2.3 }}
                    className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  />
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              I'm a passionate web developer & designer in Lagos, creating
              beautiful, functional websites that help businesses grow and
              succeed online.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={scrollToQA}
                className="group bg-gradient-to-r from-yellow-600 to-yellow-900 hover:from-yellow-900 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 transform flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/projects"
                className="text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/50 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={scrollToQA}
              className="cursor-pointer"
            >
              <ChevronDown className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Interactive Q&A Section */}
      <section
        ref={qaRef}
        id="interactive-qa"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <InteractiveQA />
      </section>
      <ProcessSection />
      {/* Services Section */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="p text-primary">What I Do Best</p>
              <h2 className="h2 text-gray-800 md:max-w-6xl mx-auto">
                From concept to launch, I provide comprehensive web solutions
                tailored to your business needs.
              </h2>
              <div className="flex justify-center items-center gap-2 mt-4">
                <div className="bg-primary w-14 h-0.5"></div>
                <div className="bg-primary w-2 h-0.5"></div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-white/20"
                >
                  <div className="bg-gradient-to-r from-black to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Fun Facts */}
      <div className="w-[90%] mb-16 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {funFacts.map((fact) => (
          <div
            key={fact.id}
            className="flex flex-col items-center justify-center py-10 px-6 bg-white rounded-lg shadow-md hover:shadow-primary transition-shadow duration-300"
          >
            <div className="text-4xl text-secondary py-4">
              {React.createElement(fact.icon)}
            </div>
            <h3 className="text-2xl font-bold text-black">
              <div ref={ref}>
                {inView && <CountUp end={fact.value} duration={2} />}
              </div>
            </h3>
            <p className="text-gray-500 text-sm mt-2">{fact.title}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="py-10 bg-gradient-to-r from-black to-yellow-600">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className=""
        >
          <InfiniteTestimonials />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="max-w-4xl mx-auto">
            <p className="p text-primary">Ready to Start Your Project?</p>
            <h2 className="h2 text-gray-800 md:max-w-4xl mx-auto">
              Let's work together to create something amazing. Answer a few
              quick questions to get a personalized recommendation for your
              project.
            </h2>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="bg-primary w-14 h-0.5"></div>
              <div className="bg-primary w-2 h-0.5"></div>
            </div>
          </div>

          <button
            onClick={scrollToQA}
            className="bg-gradient-to-r from-black to-yellow-600 hover:from-yellow-700 hover:to-black text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 transform hover:shadow-2xl mt-6"
          >
            Get Started Now
          </button>
        </motion.div>
      </section>

      <LatestBlog />

      <NewsLetter />
    </div>
  );
};

export default ModernHomePage;
