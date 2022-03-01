import { Link } from "react-router-dom";
import "./navbar.scss";
import { NavLink } from "../../schemas/navbar";

type NavBarProps = {
	navLinks: NavLink[];
	wikiName: string;
	selectedLink: string;
	onLinkSelect: (path: string) => void;
};

const NavbarView: React.FC<NavBarProps> = ({ navLinks, wikiName, selectedLink, onLinkSelect }) => (
	<nav>
		{navLinks.map(navLink => (
			<Link
				onClick={() => onLinkSelect(navLink.path)}
				key={navLink.path}
				to={navLink.path}
				className={`${navLink.class} ${selectedLink === navLink.path ? "selected" : undefined}`}
			>
				{navLink.getContent({ wikiName })}
			</Link>
		))}
	</nav>
);

export default NavbarView;
