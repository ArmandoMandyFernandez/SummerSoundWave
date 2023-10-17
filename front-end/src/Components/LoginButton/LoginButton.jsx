import "./LoginButton.scss"

function LoginButton() {
    const AUTH_URL =
        "https://accounts.spotify.com/authorize?client_id=1f7ca06ee05740d7a725f74de05dbccd&response_type=code&redirect_uri=http://the6mix.com&scope=%20user-read-private%20user-read-email%20user-top-read%20playlist-modify-private%20playlist-modify-public";

    return (
        <>
            <a className="login_button-link" href={AUTH_URL}>
                <button className="login_button">Login to Spotify</button>
            </a>
        </>
    );
}

export default LoginButton;
