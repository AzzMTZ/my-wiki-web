import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../navbar";
import { navLinks } from "./App.consts";
import { CurrentWikiProvider } from "../../contexts/currentWiki";

const AppView = () => (
	<div className="App">
		<CurrentWikiProvider>
			<Navbar navLinks={navLinks} />
			<div className="app-body">
				<Routes>
					{navLinks.map(navLink => (
						<Route key={navLink.path} path={navLink.path} element={navLink.element} />
					))}
				</Routes>
			</div>
		</CurrentWikiProvider>
	</div>
);

export default AppView;
