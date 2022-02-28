import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../navbar";
import { Home } from "../home";
import { TopicsList } from "../topics.list";
import { TopicPage } from "../topics.page";

const App = () => (
	<div className="App">
		<Navbar />
		<div className="app-body">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/topic-page" element={<TopicPage />} />
				<Route path="/topics-list" element={<TopicsList />} />
			</Routes>
		</div>
	</div>
);

export default App;
