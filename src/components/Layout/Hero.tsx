import { Element } from "react-scroll";
import { motion } from "framer-motion";
import MeImg from "../../assets/Profile.webp";

const Hero = () => {
  return (
    <Element name="home">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="md:mih-screen flex justify-center py-20 px-6 sm:px-10 lg:px-20"
      >
        <div className="w-full flex flex-col items-center gap-10">
          {/* Título + Imagen con espacio entre ellos */}
          <div className="w-full flex flex-row items-center justify-around">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase font-anton leading-tight text-center">
              Fullstack
              <br />
              <span className="text-purple-500 pl-10">Developer</span>
            </h1>

            <motion.img
              src={MeImg}
              alt="Frontend Developer"
              className="w-28 sm:w-40 lg:w-60 h-auto rounded-md shadow-lg object-contain"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </div>

          <p className="block text-lg text-gray-200 text-center max-w-xl">
            Hola! I'm a frontend developer who loves building fast, responsive,
            and good-looking web apps.
          </p>
        </div>
      </motion.section>
    </Element>
  );
};

export default Hero;
