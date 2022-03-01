import { useContext } from "react";
import { CurrentWikiContext } from "../../contexts/currentWiki";
import { NavLink } from "../../schemas/navbar";
import NavbarView from "./navbar.view";

const NavbarContainer: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => {
	const { wiki } = useContext(CurrentWikiContext);

	return <NavbarView navLinks={navLinks} wikiName={wiki.label} />;
};

export default NavbarContainer;
