import { useState, useEffect} from "react";
import { useScrollDirection } from "../../hooks/useScroll";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "../NavLink";

const Navbar = () => {
  const scrollDir = useScrollDirection(50, 100);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  setIsMobile(window.innerWidth < 768);
}, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuLinks = (
    <>
      <NavLink to="home" onClick={() => setIsOpen(false)}>
        Home
      </NavLink>
      <NavLink to="about" onClick={() => setIsOpen(false)}>
        About me
      </NavLink>
      <NavLink to="courses" onClick={() => setIsOpen(false)}>
        Courses
      </NavLink>
      <NavLink to="contact" onClick={() => setIsOpen(false)}>
        Contact
      </NavLink>
    </>
  );

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: !isMobile && scrollDir === "down" ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-20 backdrop-blur-sm bg-[#161616]/80"
      >
        {/* Logo o nombre si lo querés agregar */}
        <div className="text-white font-bold text-xl">Julian</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-10 text-white">
          {menuLinks}
        </div>

        {/* Hamburger menu */}
        <button
          className="md:hidden text-white focus:outline-none z-30"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 w-full bg-[#161616] text-white flex flex-col items-center gap-6 py-6 z-10 md:hidden shadow-md"
          >
            {menuLinks}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
