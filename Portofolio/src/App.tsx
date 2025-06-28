import Hero from "./components/Layout/Hero";
import About from "./components/Layout/About";
import Navbar from "./components/Layout/Navbar";
import Loader from "./components/Loader";
import Cursos from "./components/Layout/Courses";
import Projects from "./components/Layout/Projects";
import Contact from "./components/Layout/Contact";

function App() {
  return (
    <>
      <Loader />
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Secciones */}
        <div className="pt-20 flex flex-col gap-0 md:gap-20 ">
          <Hero />
          <About />
          <Cursos />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
