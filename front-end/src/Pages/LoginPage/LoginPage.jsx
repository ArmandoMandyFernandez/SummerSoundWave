import Welcome from "../../Components/Welcome/Welcome";
import LoginButton from "../../Components/LoginButton/LoginButton"
import "./LoginPage.scss";

function LoginPage() {

    return (
        <section className="login">
            <Welcome />
            <LoginButton />
        </section>
    );
}

export default LoginPage;
