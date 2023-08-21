import "./LoginPage.scss";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import axios from "axios";

const spotifyApi = new SpotifyWebApi();

const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

function LoginPage() {
    const [spotifyToken, setSpotifyToken] = useState("");
    const [topTracks, setTopTracks] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log(`This is what we derived from the URL:`, getTokenFromUrl());
        const spotifyToken = getTokenFromUrl().access_token;
        window.location.hash = "";
        console.log(`This is our spotify token`, spotifyToken);

        if (spotifyToken) {
            setSpotifyToken(spotifyToken);
            spotifyApi.setAccessToken(spotifyToken);
            spotifyApi.getMe().then((user) => {
                console.log(`using the getMe spotify call:`, user);
                setName(name);
            });
            setLoggedIn(true);
        }
    });



    return (
        <section>
            {!loggedIn && <a href="http://localhost:8888">Login to spotify</a>}
            {loggedIn && (
                <>
                    <h1>Welcome To Your Summer Rewind! </h1>
                    <div>
                        <h3>
                            The Summer Rewind isn’t just another music playlist -
                            it's a time capsule. It's the soundtrack to your
                            summer adventures, the melodies that underscored
                            your most cherished moments, and the rhythms that
                            moved you. Dive in, and let the memories play.
                        </h3>
                        <button>Let's Get Started!</button>
                    </div>
                </>
            )}
        </section>
    );
}

export default LoginPage;
