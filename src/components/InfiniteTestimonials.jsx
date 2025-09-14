"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Abdulrahman Ibn-Sa'eed",
    title: "Full Stack Developer",
    quote:
      "Great team! EmTech delivered a clean, responsive website ahead of schedule. Very professional and easy to work with. Highly recommended!",
    image: "./images/jade.jpg",
    rating: 5,
  },
  {
    name: "Emmanuel Onyeka OBIOZO",
    title: "Tour Guide",
    quote:
      "A great web and applications developer. Emtech is on an upward move to create lasting solutions through tech. Great job.",
    image: "./images/david.jpg",
    rating: 4,
  },
  {
    name: "Omodunke Deborah Oluwadare",
    title: "Virtual Assistant",
    quote:
      "I found working with EmTech very easy, they have a way of simplifying a rather complex process and making sure you follow along.",
    image: "./images/maya.jpg",
    rating: 5,
  },
  {
    name: "Cest Cristiano",
    title: "Business Owner",
    quote:
      "Tested and trusted. Emtech listens and gives you the best. This review is from the heart cause i was happy that he heeded to my worries!",
    image: "./images/alex.jpg",
    rating: 4,
  },
];

// Double the array to ensure smooth infinite scroll
// const duplicatedTestimonials = [...testimonials, ...testimonials];

export const InfiniteTestimonials = () => {
  return (
    <section className="overflow-hidden py-20 bg-gray-50 opacity-95">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-4"
      >
        <h2 className="text-start text-2xl font-bold">Testimonials</h2>
        <div className=" bg-gray-100 w-32 rounded-full">
          <div className="border border-primary w-8 rounded-full"></div>
        </div>
      </motion.div>

      <div className="marquee-wrapper w-full overflow-hidden py-5">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="marquee-track"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white backdrop-blur-md p-2 md:p-4 rounded-2xl min-w-[300px] max-w-sm text-center shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-2 border-primary"
              />
              <p className="text-gray-700 italic mb-3 px-6">“{item.quote}”</p>
              <div className="flex justify-center mb-2 text-yellow-400">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h4>
              <span className="text-sm text-gray-500">{item.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
