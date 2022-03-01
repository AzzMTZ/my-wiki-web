import { NavLink } from "../../schemas/navbar";
import { Home } from "../home";
import { Info } from "../info";
import { TopicsList } from "../topics.list";
import { WikiSelect } from "../wiki.select";

export const navLinks: NavLink[] = [
	{ path: "/", getContent: () => <div>Home</div>, element: <Home /> },
	{ path: "/topics-list", getContent: () => <div>Topics</div>, element: <TopicsList /> },
	{ path: "/info", getContent: () => <div>Info</div>, element: <Info /> },
	{
		path: "/wiki",
		getContent: ({ wikiName }) => (
			<div>
				Current Wiki: <span>{wikiName}</span>
			</div>
		),
		element: <WikiSelect />,
		class: "wiki",
	},
];
