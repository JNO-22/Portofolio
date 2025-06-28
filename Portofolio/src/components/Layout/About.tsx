import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import IconList from "../Icons";
import { techIcons } from "../TechIcons";

const Hero = () => {
  return (
    <Element name="about">
      {/* Sección de presentación */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center px-6 sm:px-10 lg:px-20 my-20"
      >
        <div className="w-full flex flex-col divide-y divide-[#777] gap-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extralight opacity-80 pb-8">
            Creo que un{" "}
            <motion.span
              animate={{ color: ["#a855f7", "#ec4899", "#22d3ee", "#a855f7"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="font-semibold"
            >
              sitio web visualmente atractivo
            </motion.span>{" "}
            es más que estética: es una invitación abierta a conectar, explorar
            y quedarse.
          </h2>
          <div className="flex flex-col lg:flex-row justify-around gap-8 pt-8">
            <div className="flex flex-col">
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-light text-center lg:text-left">
                Soy Julian Oliva.
              </h3>
              <div className="mt-6 flex gap-6 justify-center lg:justify-start">
                <motion.a
                  href="https://github.com/JNO-22"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white text-4xl hover:text-purple-400 transition"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/jno22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white text-4xl hover:text-blue-400 transition"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 gap-6 text-sm sm:text-base">
              <p className="opacity-80">
                Soy un desarrollador frontend autodidacta y creativo que
                disfruta transformar ideas en experiencias web intuitivas. Me
                gusta trabajar tanto en lo visual como en lo técnico de un
                proyecto.
              </p>
              <p className="opacity-80">
                Mi enfoque se basa en escribir código limpio y minimalista,
                creando interfaces fluidas y responsivas. Ya sea una landing
                page llamativa o un dashboard dinámico, busco construir
                experiencias digitales que sean pensadas, atractivas y con
                propósito, especialmente en espacios donde el diseño y el
                impacto se conectan.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 sm:px-10 lg:px-20 flex flex-col"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
            FrontEnd
          </h1>
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            <IconList icons={techIcons.slice(0, 6)} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
            Backend <br /> y Base de Datos
          </h1>
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            <IconList icons={techIcons.slice(6, 13)} />
          </div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Hero;
