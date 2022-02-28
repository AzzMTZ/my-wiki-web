import React from "react";
import NavbarView from "./navbar.view";
import { LinkData } from "./types";

const links: LinkData[] = [
	{ path: "/", name: "Home" },
	{ path: "/topic-page", name: "Topic Page" },
	{ path: "/topics-list", name: "Browse Topics" },
];

const NavbarContainer: React.FC = () => {
	return <NavbarView links={links} />;
};

export default NavbarContainer;
