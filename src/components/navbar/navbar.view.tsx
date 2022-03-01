import { Link } from "react-router-dom";
import "./navbar.scss";
import { NavLink } from "../../schemas/navbar";
import { EXAMPLE_WIKI } from "../../global.consts";

const NavbarView: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => (
	<nav>
		{navLinks.map(navLink => (
			<Link key={navLink.path} to={navLink.path}>
				{navLink.name}
			</Link>
		))}

		<Link key="/wiki" to="/wiki" className="wiki">
			Current Wiki: <span>{EXAMPLE_WIKI.name}</span>
		</Link>
	</nav>
);

export default NavbarView;
