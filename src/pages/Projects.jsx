import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Waves from "../components/utils/Waves";
import { projectCategories, projects } from "../assets/assets";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <motion.section
      className="relative w-full min-h-screen bg-gray-50 py-20 px-4 md:px-16 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
    >
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

      <div className="absolute inset-0 w-[95vw] mx-auto my-10 rounded-4xl bg-white pt-10 pb-24 overflow-y-auto scroll-smooth hide-scrollbar">
        <div className="p-6 w-full min-h-screen">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {projectCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeFilter === filter
                    ? "bg-secondary text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => handleImageClick(index)}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4">
                  <h3 className="text-white text-lg font-bold">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary px-4 py-2 text-white rounded-lg hover:bg-secondary transition"
                    >
                      Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 px-4 py-2 text-white rounded-lg hover:bg-gray-900 transition"
                    >
                      Codebase
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={filteredProjects.map((proj) => ({ src: proj.image }))}
        />
      )}
    </motion.section>
  );
};

export default Projects;
