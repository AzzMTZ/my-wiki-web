import { NavLink } from "../../schemas/navbar";
import NavbarView from "./navbar.view";

const NavbarContainer:React.FC<{links:NavLink[]}> = ({links}) => {
	return <NavbarView links={links} />;
};

export default NavbarContainer;
