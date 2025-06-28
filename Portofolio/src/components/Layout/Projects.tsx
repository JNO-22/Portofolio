import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "./projects";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <motion.section
      className="w-full min-h-screen flex flex-col items-center justify-center text-white px-4 py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className=" text-3xl sm:text-4xl font-bold text-center mb-12">
        Projectos
      </h1>
      {/* Flechas a los costados del slider */}
      <div className="w-full max-w-5xl flex flex-row items-center justify-center gap-4 sm:gap-6">
        {/* Flecha izquierda */}
        <button
          onClick={handlePrev}
          className="text-3xl hover:text-gray-300 transition-colors"
        >
          <FaArrowAltCircleLeft />
        </button>

        {/* Card del proyecto */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl bg-[#1f1f1f] p-4 sm:p-6 rounded-xl shadow-lg text-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-64 object-cover object-top rounded-md mb-4 border border-gray-700"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-4 text-left">
              {project.description}
            </p>
            <ul className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-white mb-4">
              {project.technologies.map((tech: string) => (
                <li key={tech} className="bg-gray-700 px-3 py-1 rounded-full">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded text-white text-sm"
                >
                  Ver Demo
                </a>
              )}
              <a
                href={project.codeLink}
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 transition px-4 py-2 rounded text-white text-sm"
              >
                Ver Código
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Flecha derecha */}
        <button
          onClick={handleNext}
          className="text-3xl hover:text-gray-300 transition-colors"
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </motion.section>
  );
};

export default Projects;
