import { NavLink } from "../../schemas/navbar";
import { Home } from "../home";
import { Info } from "../info";
import { TopicsList } from "../topics.list";

export const navLinks: NavLink[] = [
	{ path: "/", name: "Home", element: <Home /> },
	{ path: "/topics-list", name: "Topics", element: <TopicsList /> },
	{ path: "/info", name: "Info", element: <Info /> },
];
