import React from "react";
import Waves from "./utils/Waves";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
// import "react-simple-typewriter/dist/index.css";

const Hero = () => {
  const coloredWords = [
    <span key="1" className="text-primary capitalize">
      Passionate about creating beautiful and functional web experiences
    </span>,
    <span key="2" className="text-green-400 capitalize">
      Helping businesses grow through innovative web solutions
    </span>,
    <span key="3" className="text-yellow-400 capitalize">
      Crafting user-friendly interfaces with a focus on performance and
      accessibility
    </span>,
  ];
  return (
    <div className="relative h-[70vh] md:h-[90vh] w-full">
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
      {/* Glassmorphism Overlay Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-20 flex items-center justify-center px-4 py-6"
      >
        <div className="bg-white/10 backdrop-blur-sm border border-white/30 shadow-xl rounded-2xl px-6 py-10 text-center text-black max-w-2xl w-full">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Typewriter
              words={coloredWords.map((el) => el.props.children)} // Extract pure text
              loop={true}
              cursor
              cursorColor="#c49102"
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </motion.h1>
          <p className="text-lg md:text-xl mb-6">
            EmTech - Web Developer & Designer in Lagos
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-transparent shadow-2xl shadow-primary hover:backdrop-blur-3xl transition px-6 py-3 rounded-md font-semibold text-black cursor-pointer"
          >
            Let's Discuss
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
