import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../navbar";
import { navLinks } from "./App.consts";
import { EXAMPLE_WIKI } from "../../global.consts";

const AppView = () => (
	<div className="App">
		<Navbar navLinks={navLinks} />
		<div className="app-body">
			<Routes>
				{navLinks.map(navLink => (
					<Route key={navLink.path} path={navLink.path} element={navLink.element} />
				))}

				<Route key="/wiki" path="/wiki" element={<h1>{EXAMPLE_WIKI.name}</h1>} />
			</Routes>
		</div>
	</div>
);

export default AppView;
