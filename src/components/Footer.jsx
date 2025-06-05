import React from "react";
import Particles from "./utils/Particles";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: <FaFacebookF size={20} />,
      className: "text-blue-600",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <FaTwitter size={20} />,
      className: "text-blue-400",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <FaInstagram size={20} />,
      className: "text-pink-500",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <FaLinkedinIn size={20} />,
      className: "text-blue-700",
    },
  ];

  // Social links with icons

  const socialLinksDiv = (
    <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.className}hover:text-gray-300 duration-300 hover:scale-110 transition-transform flex items-center gap-2`}
          aria-label={link.name}
        >
          {link.icon}
          <span className="sr-only">{link.name}</span>
        </a>
      ))}
    </div>
  );
  return (
    <footer className="relative w-full bg-white text-black overflow-hidden">
      <Particles
        particleColors={["#ffda03", "#ffda03"]}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-20 flex md:flex-row flex-col items-center justify-center md:justify-between px-4 py-8 space-y-6 md:space-y-4 text-center"
      >
        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          {socialLinksDiv}
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-secondary font-medium">Emtech</span>. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
