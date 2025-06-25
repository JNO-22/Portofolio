import { Element } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <Element name="about">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bo flex justify-center p-20"
      >
        <div className="w-full flex flex-col justify-around divide-y-1 divide-solid divide-[#777] gap-20">
          <h2 className="text-5xl font-extralight opacity-80 pb-10 ">
            I believe that a visually engaging website is more than aesthetics —
            it's an open invitation for users to connect, explore, and stay.
          </h2>
          <div className="flex flex-row justify-around">
            <h3 className="text-4xl font-light">I'm Julian Oliva.</h3>
            <div className="flex flex-col w-1/2 gap-10">
            <p className=" opacity-80">
              I'm a creative and self-taught frontend developer who loves
              turning ideas into intuitive web experiences. I enjoy
              working on both the visual and technical sides of a project.
            </p>
            <p className="opacity-80">
              My approach focuses on writing clean, minimal code while building
              smooth, responsive interfaces. Whether it's a bold landing page or
              a dynamic dashboard, I aim to craft digital experiences that feel
              thoughtful, engaging, and built with purpose — especially in
              spaces where design and impact go hand in hand.
            </p>
            </div>
          </div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Hero;
