require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const SpotifyWebApi = require("spotify-web-api-node");

const client_id = process.env.CLIENT_ID; // dotenv client id
const client_secret = process.env.CLIENT_SECRET; // dotenv secret
const redirect_uri = process.env.CLIENT_REDIRECT_URI; // dotenv redirect uri

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken,
    });

    spotifyApi
        .refreshAccessToken()
        .then((data) => {
            console.log(data.body)
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
});

app.post("/login", (req, res) => {
    const code = req.bodyy.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: { redirect_uri },
        clientId: { client_id },
        clientSectret: { client_secret },
    });

    spotifyApi
        .authorizationCodeGrant(code)
        .then((data) => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expries_in,
            });
        })
        .catch(() => {
            res.sendStatus(400);
        });
});



console.log("Listening on 8888");
app.listen(8888);
