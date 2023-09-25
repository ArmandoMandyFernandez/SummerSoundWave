import "./HomePage.scss";
import { useEffect } from "react";
import useAuth from "../../Functions/useAuth";
import getUserInfo from "../../Functions/SpotifyFunctions"
import SpotifyWebApi from "spotify-web-api-js";


const spotifyApi = new SpotifyWebApi();

function HomePage({ code }) {
    const accessToken = useAuth(code);
    const access_Token = accessToken

    // Create an api call to get the user information
    useEffect(()=>{
        getUserInfo(access_Token)
    })

    return (
        <section>
            <div>Hello Name goes here
            </div>
            <div>{code}</div>
        </section>
    );
}

export default HomePage;
