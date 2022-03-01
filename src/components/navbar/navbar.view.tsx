import { Link } from "react-router-dom";
import "./navbar.scss";
import { NavLink } from "../../schemas/navbar";

const NavbarView: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => (
	<nav>
		{navLinks.map(navLink => (
			<Link key={navLink.path} to={navLink.path}>
				{navLink.name}
			</Link>
		))}
	</nav>
);

export default NavbarView;
