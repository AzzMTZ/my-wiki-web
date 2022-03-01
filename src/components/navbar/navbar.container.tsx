import { NavLink } from "../../schemas/navbar";
import NavbarView from "./navbar.view";

const NavbarContainer: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => {
	return <NavbarView navLinks={navLinks} />;
};

export default NavbarContainer;
