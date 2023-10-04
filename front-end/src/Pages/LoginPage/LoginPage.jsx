import "./LoginPage.scss";


function LoginPage( ) {

    const AUTH_URL =
        "https://accounts.spotify.com/authorize?client_id=1f7ca06ee05740d7a725f74de05dbccd&response_type=code&redirect_uri=http://localhost:3000&scope=%20user-read-private%20user-read-email%20user-top-read%20playlist-modify-private%20playlist-modify-public";

    return (
        <section>
                <a className="login_button" href={AUTH_URL}>
                    <button className="login_button">Login to Spotify</button>
                </a>
        </section>
    );
}

export default LoginPage;
