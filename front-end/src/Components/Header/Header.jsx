import logo from "../../Assets/the-6mix-logo-white.png";
import "./Header.scss";

function Header() {

    return (
        <section className="header">
            <img src={logo} alt="" className="header_image"/>
        </section>
    );
}

export default Header;