import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-end gap-20 py-4 px-8 z-20">
      <NavLink to="home">Home</NavLink>
      <NavLink to="about">About me</NavLink>
      <NavLink to="projects">Proyects</NavLink>
      <NavLink to="Cursos">Courses</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
