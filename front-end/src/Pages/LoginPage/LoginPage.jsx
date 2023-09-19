import "./LoginPage.scss";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Welcome from "../../Components/Welcome/Welcome";

const spotifyApi = new SpotifyWebApi();
const code = new URLSearchParams(window.location.search).get('code') 

function LoginPage() {
    const [spotifyToken, setSpotifyToken] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    


    useEffect(() => {
        console.log(`This is our spotify token`, code);

        if (code) {
            setSpotifyToken(spotifyToken);
            spotifyApi.setAccessToken(spotifyToken);
            setLoggedIn(true);
        }
    }, [spotifyToken]);

    const AUTH_URL =
        "https://accounts.spotify.com/authorize?client_id=1f7ca06ee05740d7a725f74de05dbccd&response_type=code&redirect_uri=http://localhost:3000&scope=%20user-read-private%20user-read-email%20user-top-read%20playlist-modify-private%20playlist-modify-public";

    return (
        <section>
            {!loggedIn && (
                <a className="login_button" href={AUTH_URL}>
                    <button className="login_button">Login to Spotify</button>
                </a>
            )}
            {loggedIn && (
                <>
                    <Welcome code={code}/>
                </>
            )}
        </section>
    );
}

export default LoginPage;
