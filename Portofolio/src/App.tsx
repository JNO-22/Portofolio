import { Element } from "react-scroll";
import { motion } from "framer-motion";
import Hero from "./components/Layout/Hero";
import About from "./components/Layout/About";
import Navbar from "./components/Layout/Navbar";
import Loader from "./components/Loader";
import Courses from "./components/Layout/Courses";

function App() {
  return (
    <>
      <Loader />
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Secciones */}
        <div className="pt-20 flex flex-col gap-20">
          <Hero />
          <About/>
          <Courses/>

          <Element name="contact">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex items-center justify-center"
            >
              <h1 className="text-3xl">Contacto</h1>
            </motion.section>
          </Element>
        </div>
      </div>
    </>
  );
}

export default App;
