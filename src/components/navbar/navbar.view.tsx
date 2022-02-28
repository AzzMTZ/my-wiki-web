import { Link } from "react-router-dom";
import "./navbar.scss";
import { NavLink } from "../../schemas/navbar";

const NavbarView: React.FC<{ links: NavLink[] }> = ({ links }) => (
	<nav>
		{links.map(link => (
			<Link key={link.path} to={link.path}>
				{link.name}
			</Link>
		))}
	</nav>
);

export default NavbarView;
