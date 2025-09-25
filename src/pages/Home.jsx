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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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

  // Slides data
  const heroSlides = [
    {
      id: 1,
      image: "/images/slider-img/slider1.jpg",
      title: "Building Digital",
      highlight: "Experiences",
      subtitle:
        "I'm a passionate web developer & designer in Lagos, creating beautiful, functional websites that help businesses grow and succeed online.",
    },
    {
      id: 2,
      image: "/images/slider-img/slider2.jpg",
      title: "Crafting Modern",
      highlight: "Websites",
      subtitle:
        "From portfolio sites to full e-commerce solutions, I deliver high-performing digital products tailored to your brand.",
    },
    {
      id: 3,
      image: "/images/slider-img/slider3.jpg",
      title: "Designing for",
      highlight: "Impact",
      subtitle:
        "Clean, user-friendly designs that don’t just look good, but help you achieve real results online.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Slider */}
      <section className="relative min-h-screen">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-[85vh]"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative h-screen flex items-center justify-center text-center px-4"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto text-white">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerChildren}
                  >
                    <motion.h1
                      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                      variants={fadeInUp}
                    >
                      {slide.title}{" "}
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
                        {slide.highlight}
                      </span>
                    </motion.h1>

                    <motion.p
                      variants={fadeInUp}
                      className="text-lg md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed"
                    >
                      {slide.subtitle}
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
                        className="text-white/90 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
                      >
                        View Portfolio
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Scroll Down Icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                  {/* <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    onClick={scrollToQA}
                    className="cursor-pointer"
                  >
                    <ChevronDown className="w-8 h-8 text-white hover:text-yellow-400 transition-colors" />
                  </motion.div> */}
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 border border-white/20"
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
            className="flex flex-col items-center justify-center py-10 px-6 bg-white rounded-lg hover:shadow-primary transition-shadow duration-300"
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
        >
          <InfiniteTestimonials />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-1 px-4">
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
