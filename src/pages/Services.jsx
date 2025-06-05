import React from "react";
import { motion } from "framer-motion";
import { services } from "../assets/assets";
import Waves from "../components/utils/Waves";

const Services = () => {
  return (
    <motion.section
      className="relative w-full min-h-screen bg-gray-50 py-20 px-4 md:px-16 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Background waves */}

      <Waves
        lineColor="#ffda03"
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

      {/* White rounded background + content wrapper */}
      <div className="absolute inset-0 w-[95vw] mx-auto my-10 rounded-4xl bg-white pt-10 pb-24 overflow-y-auto scroll-smooth hide-scrollbar">
        <div className="flex flex-col gap-8 px-4 md:px-16">
          <div className="mb-12">
            <h2 className="text-start text-3xl font-bold text-gray-800">
              What I do
            </h2>
            <div className="bg-gray-200 w-28 h-1 rounded-full mt-2">
              <div className="bg-primary h-1 w-10 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-primary/40 transition-shadow duration-300"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
