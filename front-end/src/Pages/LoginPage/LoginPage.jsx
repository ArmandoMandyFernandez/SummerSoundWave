import "./LoginPage.scss";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Welcome from "../../Components/Welcome/Welcome";


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
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [id, setId] = useState("")
    const [href,setHref] = useState("")
    const [img, setImg] = useState([])

    useEffect(() => {
        console.log(`This is what we derived from the URL:`, getTokenFromUrl());
        const spotifyToken = getTokenFromUrl().access_token;
        window.location.hash = "";
        console.log(`This is our spotify token`, spotifyToken);

        if (spotifyToken) {
            setSpotifyToken(spotifyToken);
            spotifyApi.setAccessToken(spotifyToken);
            spotifyApi.getMe()
            .then((user) => {
                console.log(`using the getMe spotify call:`, user);
                setUserName(user.display_name);
                setId(user.id);
                setHref(user.href);
                // setImg(user.images[1])
                console.log(`this is the user data:`, user.display_name)
            });
            setLoggedIn(true);
        }
    },[]);

    


    return (
        <section>
            {!loggedIn && <a href="http://localhost:8888">Login to spotify</a>}
            {loggedIn && (
                <>
                    <Welcome name={userName} id={id} href={href} images={img}/>
                </>
            )}
        </section>
    );
}

export default LoginPage;
