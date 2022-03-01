import { useContext } from "react";
import { CurrentWikiContext } from "../../contexts/currentWiki";
import { NavLink } from "../../schemas/navbar";
import NavbarView from "./navbar.view";
import { useLocation } from "react-router-dom";

const NavbarContainer: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => {
	const { wiki } = useContext(CurrentWikiContext);

	return <NavbarView navLinks={navLinks} wikiName={wiki.label} selectedLink={useLocation().pathname} />;
};

export default NavbarContainer;
