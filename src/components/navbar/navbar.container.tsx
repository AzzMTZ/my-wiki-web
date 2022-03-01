import { useContext, useState } from "react";
import { CurrentWikiContext } from "../../contexts/currentWiki";
import { NavLink } from "../../schemas/navbar";
import NavbarView from "./navbar.view";

const NavbarContainer: React.FC<{ navLinks: NavLink[] }> = ({ navLinks }) => {
	const { wiki } = useContext(CurrentWikiContext);
	const [selectedLink, selectLink] = useState(navLinks[0]?.path ?? "/");

	return (
		<NavbarView navLinks={navLinks} wikiName={wiki.label} selectedLink={selectedLink} onLinkSelect={selectLink} />
	);
};

export default NavbarContainer;
