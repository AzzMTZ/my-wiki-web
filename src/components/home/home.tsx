import "./home.scss";
import logo from "../../assets/images/my_wiki.png";

const HomeView = () => (
	<div>
		<h1>Welcome To My Wiki App!</h1>
		<img src={logo} className="App-logo" alt="logo" />
		<p>Made by, yours truly, Azz MTZ</p>
	</div>
);

export default HomeView;
