import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useClickAway } from "react-use";
import Waves from "../components/utils/Waves";
import { projectCategories, projects } from "../assets/assets";
import LazyImage from "../components/LazyLoading";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeFilter)
            : project.category === activeFilter
        );

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

      <div className="relative w-full max-w-[95vw] mx-auto rounded-4xl bg-gray-100 pt-10 pb-24 px-4 md:px-16 shadow-lg -z-50">
        {/* Mobile Dropdown */}
        <div className="block md:hidden mb-8 py-10 max-w-xs mx-auto">
          <Listbox value={activeFilter} onChange={setActiveFilter}>
            <div className="relative">
              <div className="flex justify-end mx-auto">
                <Listbox.Button className="ml-auto max-w-sm rounded-lg border border-gray-300 bg-white px-4 py-2 text-left shadow focus:outline-none focus:ring-2 focus:ring-secondary">
                  <span className="block truncate">{activeFilter}</span>
                </Listbox.Button>
              </div>
              <Listbox.Options className="absolute right-0 z-10 mt-2 max-w-lg rounded-lg border border-gray-200 bg-white shadow-lg focus:outline-none">
                {projectCategories.map((filter) => (
                  <Listbox.Option
                    key={filter}
                    value={filter}
                    className={({ active, selected }) =>
                      clsx(
                        "cursor-pointer select-none px-4 py-2",
                        active
                          ? "bg-secondary/10 text-secondary"
                          : "text-gray-800",
                        selected && "bg-secondary/20 font-semibold"
                      )
                    }
                  >
                    {({ selected }) => (
                      <div className="flex items-center justify-between">
                        <span>{filter}</span>
                        {selected && (
                          <CheckIcon className="h-4 w-4 text-secondary" />
                        )}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-wrap gap-4 mb-8 justify-center py-10">
          {projectCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeFilter === filter
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-secondary/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Project
              key={project.id}
              project={project}
              index={index}
              onImageClick={handleImageClick}
            />
          ))}
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

const Project = ({ project, index, onImageClick }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const ref = useRef(null);
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  useClickAway(ref, () => {
    if (isTouchDevice) {
      setShowOverlay(false);
    }
  });

  const handleClick = () => {
    if (isTouchDevice) {
      setShowOverlay(true);
    }
  };

  return (
    <motion.div
      ref={ref}
      onClick={handleClick}
      className={`project relative group overflow-hidden shadow-lg cursor-pointer ${
        isTouchDevice && showOverlay ? "show-overlay" : ""
      }`}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="overlay absolute inset-0 bg-gray-500/50 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4 z-50">
        <h3 className="text-white text-xl font-bold">{project.title}</h3>
        <div className="flex justify-between gap-16 relative -bottom-18">
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
      <LazyImage
        src={project.image}
        alt={project.title}
        placeholderClassName="w-full h-60 object-cover rounded-none"
        onClick={() => onImageClick(index)}
        className="w-full h-60 object-cover rounded-none"
      />
    </motion.div>
  );
};

export default Projects;
