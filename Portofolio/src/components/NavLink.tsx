import { Link } from "react-scroll";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link
    to={to}
    smooth
    duration={500}
    offset={-50}
    className="cursor-pointer text-white hover:text-purple-500"
  >
    {children}
  </Link>
);

export default NavLink;