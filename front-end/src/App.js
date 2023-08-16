import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";


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

function App() {
    const [spotifyToken, setSpotifyToken] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() =>{
        console.log(`This is what we derived from the URL:`, getTokenFromUrl())
        const spotifyToken = getTokenFromUrl().access_token
        window.location.hash="";
        console.log(`This is our spotify token`, spotifyToken);

        if (spotifyToken) {
            setSpotifyToken(spotifyToken)
            //use spotify api
            setLoggedIn(true)
        }
    })


    
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
