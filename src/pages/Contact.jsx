import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Waves from "../components/utils/Waves";

const Contact = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
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
      <div className="relative w-full max-w-7xl mx-auto my-10 rounded-4xl bg-white pt-10 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:justify-between mb-8 py-8 md:py-0 border-t border-b border-gray-300 px-4 md:px-16 bg-gray-50"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6 md:py-10">
            Contact
          </h2>
          <p className="text-gray-500 text-xs md:py-2">Get in touch</p>
        </motion.div>

        {/* Map */}
        <div className="md:px-16 px-4">
          <div className="mb-10">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.0929352728995!2d3.337391173667863!3d6.595817393397945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92276da3a293%3A0xe37eff5829bebc22!2s5%20Adepele%20St%2C%20Computer%20Village%2C%20Ikeja%20101233%2C%20Lagos!5e1!3m2!1sen!2sng!4v1749020135915!5m2!1sen!2sng"
              className="w-full h-40 rounded-md border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8">
            {/* Contact Info */}
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-6">
                <Phone className="text-primary" />
                <div>
                  <p className="font-semibold">+234-816-525-7534</p>
                  <p>We&apos;re always available to take your calls.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <MapPin className="text-primary" />
                <div>
                  <p className="font-semibold">Lagos, Nigeria</p>
                  <p>5 Adepele Street, Ikeja</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Mail className="text-primary" />
                <div>
                  <p className="font-bold">hello@emtech.com.ng</p>
                  <p>We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-1">
                  How Can I Help You?
                </h3>
                <div className="bg-gray-100 h-0.5 w-46">
                  <div className="bg-primary h-0.5 w-8 "></div>
                </div>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary "
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
              ></textarea>

              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded hover:bg-[#8c876a] transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
