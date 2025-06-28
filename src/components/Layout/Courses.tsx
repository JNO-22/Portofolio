import { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import CourseCard from "../CourseCard";

const courses = [
  {
    id: 1,
    title: "CODO A CODO - Full Stack - Python",
    description:
      "Formación en desarrollo web con Python y herramientas full stack.",
    certificateImage: "src/assets/Python.webp",
  },
  {
    id: 2,
    title: "Oracle Next Education F2 T6 Back‑end",
    description:
      "Capacitación profesional en back-end con Java, Spring Boot y bases de datos.",
    certificateImage: "src/assets/Alura.webp",

    certificateLink:
      "https://app.aluracursos.com/program/certificate/c2d6bd52-7bb9-4352-96f6-06b0cab2eeae?lang",
  },
  {
    id: 3,
    title: "MERN Stack - Polo Tecnológico La Rioja",
    description:
      "Entrenamiento intensivo en MongoDB, Express, React y Node.js.",
    certificateImage: "",
  },
];

const Cursos = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <Element name="cursos" className="bg-[#161616] py-20">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Cursos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {courses.map((course, index) => {
            const isLastOdd =
              index === courses.length - 1 && courses.length % 2 !== 0;

            return (
              <div
                key={course.id}
                className={`flex w-full ${
                  isLastOdd ? "md:col-span-2 md:justify-center" : ""
                }`}
              >
                <CourseCard
                  course={course}
                  isActive={activeId === course.id}
                  isInactive={activeId !== null && activeId !== course.id}
                  onHover={() => setActiveId(course.id)}
                  onLeave={() => setActiveId(null)}
                  delay={index * 0.15}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </Element>
  );
};

export default Cursos;
