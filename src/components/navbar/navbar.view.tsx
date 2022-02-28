import { Link } from "react-router-dom";
import "./navbar.scss";
import { LinkData } from "./types";

const NavbarView: React.FC<{ links: LinkData[] }> = ({ links }) => {
	return (
		<nav>
			{links.map(link => (
				<Link to={link.path}>{link.name}</Link>
			))}
		</nav>
	);
};

export default NavbarView;
