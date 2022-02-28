import NavbarView from "./navbar.view";
import { LinkData } from "./navbar.consts";

const links: LinkData[] = [
	{ path: "/", name: "Home" },
	{ path: "/topic-page", name: "Topic Page" },
	{ path: "/topics-list", name: "Browse Topics" },
];

const NavbarContainer = () => {
	return <NavbarView links={links} />;
};

export default NavbarContainer;
