import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Waves from "../components/utils/Waves";
import { projectCategories, projects } from "../assets/assets";
import LazyImage from "../components/LazyLoading";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import HeroBanner from "../components/HeroBanner";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeFilter)
            : project.category === activeFilter
        );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <>
      <HeroBanner
        title="Our Projects"
        subtitle="A curated selection of work that reflects our design thinking, engineering precision, and attention to detail."
        backgroundImage="/images/hero-img/project-img.webp"
        breadcrumbs={["Projects"]}
      />

      <motion.section
        className="relative min-h-screen bg-gray-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Waves
          lineColor="#c49102"
          backgroundColor="rgba(255,255,255,0.2)"
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

        <div className="relative max-w-7xl mx-auto px-6 md:px-14 py-20">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl px-6 md:px-12 py-16">
            {/* Mobile Filter */}
            <div className="block md:hidden mb-12 max-w-xs mx-auto">
              <Listbox
                value={activeFilter}
                onChange={(val) => {
                  setActiveFilter(val);
                  setCurrentPage(1);
                }}
              >
                <div className="relative">
                  <Listbox.Button className="w-full rounded-full border border-gray-300 bg-white px-5 py-2 text-left shadow-sm focus:outline-none">
                    <span className="block truncate">{activeFilter}</span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg">
                    {projectCategories.map((filter) => (
                      <Listbox.Option
                        key={filter}
                        value={filter}
                        className={({ active }) =>
                          clsx(
                            "cursor-pointer px-4 py-2",
                            active && "bg-gray-100"
                          )
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between items-center">
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

            {/* Desktop Filters */}
            <div className="hidden md:flex justify-center gap-4 mb-14 flex-wrap">
              {projectCategories.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setCurrentPage(1);
                  }}
                  className={clsx(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all",
                    activeFilter === filter
                      ? "bg-secondary text-white shadow-md"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={() => {
                    setLightboxIndex(startIndex + index);
                    setLightboxOpen(true);
                  }}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-3 mt-16">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={clsx(
                      "h-10 w-10 rounded-full text-sm font-medium transition",
                      currentPage === i + 1
                        ? "bg-secondary text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
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
    </>
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64 overflow-hidden">
        <LazyImage
          src={project.image}
          alt={project.title}
          onClick={onOpen}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-white text-lg font-semibold mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.title}
        </h3>

        <div className="flex gap-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-full bg-white text-gray-900 font-medium hover:bg-secondary hover:text-white transition"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-full bg-black/70 text-white hover:bg-black transition"
          >
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
