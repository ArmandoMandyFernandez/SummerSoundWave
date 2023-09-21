import "./HomePage.scss";
import { useEffect } from "react";
import useAuth from "../../Functions/useAuth";
import getUserInfo from "../../Functions/SpotifyFunctions"
import SpotifyWebApi from "spotify-web-api-js";


const spotifyApi = new SpotifyWebApi()

function HomePage({ code }) {
    const accessToken = useAuth(code);
    const getUser = getUserInfo(accessToken)

    useEffect(()=>{
        spotifyApi.getMe(getUser)
        .then((data) => {
            console.log('Auth User is: ', data.body)
        }).catch((err)=>{
            console.log(err)
        })
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
