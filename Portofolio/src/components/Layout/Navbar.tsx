import { useScrollDirection } from "../../hooks/useScroll";
import { motion } from "framer-motion";
import NavLink from "../NavLink";

const Navbar = () => {
  const scrollDir = useScrollDirection(50, 100);
  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: scrollDir === "down" ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full flex justify-end gap-20 py-4 px-8 z-20 backdrop-blur-sm"
    >
      <NavLink to="home">Home</NavLink>
      <NavLink to="about">About me</NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </motion.nav>
  );
};

export default Navbar;
