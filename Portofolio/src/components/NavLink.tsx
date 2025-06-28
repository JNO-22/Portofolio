import { Link } from "react-scroll";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ to, children, onClick }: NavLinkProps) => (
  <Link
    to={to}
    smooth
    duration={500}
    offset={-50}
    className="cursor-pointer text-white hover:text-purple-500"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default NavLink;
