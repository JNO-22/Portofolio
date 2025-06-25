import { Element } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Element name="home">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bo flex justify-center p-20"
      >
        <div className="w-full flex flex-row justify-around">
          <div className=" flex flex-col gap-10  ">
            <h1 className=" text-8xl font-black uppercase font-anton ">
              FrontEnd <br />{" "}
              <span className="text-purple-500 p-10"> Developer </span>
            </h1>
            <p className="text-lg text-gray-200 w-1/2">
              Hola! , I'm a frontend developer who loves building fast,
              responsive, and good-looking web apps.
            </p>
          </div>
          <div></div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Hero;
