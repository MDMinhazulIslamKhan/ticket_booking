import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <Link to="/">
                    <img className="navbar__brand--img" src={logo} alt="" />
                </Link>
            </div>
            <ul className="navbar__menu">
                <li className="navbar__menu--ul">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
