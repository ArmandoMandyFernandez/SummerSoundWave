import "./HomePage.scss";
import { useEffect } from "react";
import useAuth from "../../Functions/useAuth";
import SpotifyWebApi from "spotify-web-api-js";


const spotifyApi = new SpotifyWebApi()

function HomePage({ code }) {
    const accessToken = useAuth(code);

    console.log(code)

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if (code) {
            const profile = spotifyApi.getMe(accessToken)
            console.log(profile)
            
        }

    })

    return (
        <section>
            Hello from Home
            <div>{code}</div>
        </section>
    );
}

export default HomePage;
