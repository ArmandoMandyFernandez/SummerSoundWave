require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const SpotifyWebApi = require("spotify-web-api-node");

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = process.env.CLIENT_REDIRECT_URI; // Your redirect uri


// var generateRandomString = function (length) {
//     var text = "";
//     var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for (var i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
// };

// var stateKey = "spotify_auth_state";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// app.use(express.static(__dirname + "/public"))
//     .use(cors())
//     .use(cookieParser());

// app.get("/login", function (req, res) {
//     var state = generateRandomString(16);
//     res.cookie(stateKey, state);

//     // your application requests authorization
//     var scope =
//         "user-read-private user-read-email user-top-read playlist-modify-private playlist-modify-public";
//     res.redirect(
//         "https://accounts.spotify.com/authorize?" +
//             querystring.stringify({
//                 response_type: "code",
//                 client_id: client_id,
//                 scope: scope,
//                 redirect_uri: redirect_uri,
//                 state: state,
//             })
//     );
// });

// app.get("/callback", function (req, res) {
//     // application requests refresh and access tokens
//     // after checking the state parameter

//     var code = req.query.code || null;
//     var state = req.query.state || null;
//     var storedState = req.cookies ? req.cookies[stateKey] : null;

//     if (state === null || state !== storedState) {
//         res.redirect(
//             "/#" +
//                 querystring.stringify({
//                     error: "state_mismatch",
//                 })
//         );
//     } else {
//         res.clearCookie(stateKey);
//         var authOptions = {
//             url: "https://accounts.spotify.com/api/token",
//             form: {
//                 code: code,
//                 redirect_uri: redirect_uri,
//                 grant_type: "authorization_code",
//             },
//             headers: {
//                 Authorization:
//                     "Basic " +
//                     new Buffer(client_id + ":" + client_secret).toString(
//                         "base64"
//                     ),
//             },
//             json: true,
//         };

//         request.post(authOptions, function (error, response, body) {
//             if (!error && response.statusCode === 200) {
//                 var access_token = body.access_token,
//                     refresh_token = body.refresh_token;

//                 var options = {
//                     url: "https://api.spotify.com/v1/me",
//                     headers: { Authorization: "Bearer " + access_token },
//                     json: true,
//                 };

//                 // use the access token to access the Spotify Web API
//                 request.get(options, function (error, response, body) {
//                     console.log(body);
//                 });

//                 // we can also pass the token to the browser to make requests from there
//                 res.redirect(
//                     "http://localhost:3000/#" +
//                         querystring.stringify({
//                             access_token: access_token,
//                             refresh_token: refresh_token,
//                         })
//                 );
//             } else {
//                 res.redirect(
//                     "http://localhost:3000/#" +
//                         querystring.stringify({
//                             error: "invalid_token",
//                         })
//                 );
//             }
//         });
//     }
// });

// app.get("/refresh_token", function (req, res) {
//     // requesting access token from refresh token
//     var refresh_token = req.query.refresh_token;
//     var authOptions = {
//         url: "https://accounts.spotify.com/api/token",
//         headers: {
//             Authorization:
//                 "Basic " +
//                 new Buffer(client_id + ":" + client_secret).toString("base64"),
//         },
//         form: {
//             grant_type: "refresh_token",
//             refresh_token: refresh_token,
//         },
//         json: true,
//     };

//     request.post(authOptions, function (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             var access_token = body.access_token;
//             res.send({
//                 access_token: access_token,
//             }).catch(err => {
//                 console.log(err)
//                 res.sendStatus(400)
//             });
//         }
//     });
// });

console.log("Listening on 8888");
app.listen(8888);
