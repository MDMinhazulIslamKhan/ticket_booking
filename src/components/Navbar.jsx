import logo from "../../assets/logo.png"
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <img className="navbar__brand--img" src={logo} alt="" />
            </div>
            <ul className="navbar__menu">
                <li className="navbar__menu--ul">
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
