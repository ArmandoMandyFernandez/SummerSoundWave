import logo from "../../Assets/the-6mix-logo-white.png";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {

    return (
        <section className="header">
            <Link to="/">
            <img src={logo} alt="" className="header_image"/>
            </Link>
        </section>
    );
}

export default Header;