import "./home.scss";
import logo from "../../assets/images/my_wiki.png";

const HomeView = () => (
	<div className="home-container">
		<h1>Welcome To My Wiki App!</h1>
		<img src={logo} className="App-logo" alt="logo" />
		<p>Made by Azz&Zol (but actually Azz)</p>
	</div>
);

export default HomeView;
