import React, { useRef, useEffect } from "react";
import Waves from "../components/utils/Waves";
import LazyImage from "../components/LazyLoading";
import { funFacts, services } from "../assets/assets";
import { InfiniteTestimonials } from "../components/InfiniteTestimonials";
import { motion } from "framer-motion";

const About = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 10; // Range: -5 to +5
      const offsetY = (e.clientY / innerHeight - 0.5) * 10;

      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden"
    >
      <Waves
        lineColor="#c49102"
        backgroundColor="rgba(252, 252, 252, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div className="relative w-full max-w-[95vw] mx-auto my-10 rounded-4xl bg-gray-100 pt-10 pb-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-24 px-4 md:px-16">
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <div
              ref={imageRef}
              className="transition-transform duration-200 ease-out p-6 bg-gray-400 rounded-md shadow-xl hover:shadow-primary/10"
            >
              <LazyImage
                src="/images/profile-img.webp"
                alt="profile"
                className="w-64 h-64 shadow-2xl bg-transparent rounded-full"
                placeholderClassName="w-64 h-64"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h4 className="text-sm text-gray-400 uppercase tracking-wider">
              Web Developer
            </h4>
            <h1 className="text-3xl md:text-5xl font-bold">Emmanuel Nwankwo</h1>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              I am a web developer with a passion for creating beautiful and
              functional websites. I specialize in front-end development, but I
              also have experience with back-end technologies.
            </p>
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/17A5k_R6MSEJh0P3W_vafqpejQVY_Byi0/view?usp=sharing"
                target="_blank"
                className="bg-white text-black px-6 py-2 rounded-full font-medium transition border-4 border-primary hover:bg-secondary hover:text-white"
              >
                Download CV
              </a>
              <a
                href="mailto:emachi2011@gmail.com"
                className="border border-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        {/* Services Section */}
        <div className="py-16 px-4 md:px-16">
          <div>
            <h2 className="text-start text-2xl font-bold">What I do</h2>
            <div className=" bg-gray-100 w-28 rounded-full">
              <div className="border border-primary w-8 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8  ">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex gap-4 p-6 rounded-lg shadow-lg hover:shadow-primary transition-shadow duration-300 mb-4"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-semibold text-start">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-start">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonial Section */}
        <InfiniteTestimonials />
        {/* Fun fact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {funFacts.map((fact) => (
            <div
              key={fact.id}
              className="flex flex-col items-center justify-center py-10 px-6 bg-white rounded-lg shadow-md hover:shadow-primary transition-shadow duration-300 m-4"
            >
              <div className="text-4xl text-secondary py-4">
                {React.createElement(fact.icon)}
              </div>
              <h3 className="text-2xl font-bold text-black">{fact.value}</h3>
              <p className="text-gray-500 text-sm mt-2">{fact.title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
