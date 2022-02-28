import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar";
import Home from "../home";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<div className="app-header">
				<Navbar />
			</div>
			<div className="app-body">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/topic-page" />
					<Route path="/topics-list" />
				</Routes>
			</div>
		</div>
	);
}

export default App;
