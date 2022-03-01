import { Link } from "react-router-dom";
import "./navbar.scss";
import { NavLink } from "../../schemas/navbar";

const NavbarView: React.FC<{ navLinks: NavLink[]; wikiName: string }> = ({ navLinks, wikiName }) => (
	<nav>
		{navLinks.map(navLink =>
			navLink.path === "/wiki" ? (
				<Link key="/wiki" to="/wiki" className="wiki">
					Current Wiki: <span>{wikiName}</span>
				</Link>
			) : (
				<Link key={navLink.path} to={navLink.path}>
					{navLink.name}
				</Link>
			),
		)}
	</nav>
);

export default NavbarView;
