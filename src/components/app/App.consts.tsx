import { INFO_SECTION } from "../../global.consts";
import { NavLink } from "../../schemas/navbar";
import { Home } from "../home";
import { TopicsList } from "../topics.list";

export const navLinks: NavLink[] = [
	{ path: "/", name: "Home", element: <Home /> },
	{ path: "/topics-list", name: "Topics", element: <TopicsList /> },
	{
		path: "/info",
		name: "Info",
		element: (
			<div>
				<h1>Info & About</h1>
				<p>{INFO_SECTION}</p>
			</div>
		),
	},
];
