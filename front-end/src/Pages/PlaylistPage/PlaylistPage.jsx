import "./PlaylistPage.scss";


function PlaylistPage( ) {
// pulled from the spotify page: 
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//   });
//   return await res.json();
// }

// const tracksUri = [
//   'spotify:track:23Z3bbYcl1PdcPJemLa4zc','spotify:track:4jkazbFDLNzx7SZJj63mRs','spotify:track:0F5DJA5gUkR9YSPIP1lCl2','spotify:track:1n5zB555q7ku8W3P4bjkPZ','spotify:track:1tbQ3ndKbMRjsgf8tnh7pS','spotify:track:7eKMRd4gLrD1mynGIXFtm2','spotify:track:3RaCGXCiiMufRPoexXxGkV','spotify:track:6Wk7MXOx1n5aqrmGw5MULv','spotify:track:7CGB43FkEomSXAtnTNLC9n','spotify:track:4iRF49wQyW2359Lxh6bJ2q'
// ];

// async function createPlaylist(tracksUri){
//   const { id: user_id } = await fetchWebApi('v1/me', 'GET')

//   const playlist = await fetchWebApi(
//     `v1/users/${user_id}/playlists`, 'POST', {
//       "name": "My recommendation playlist",
//       "description": "Playlist created by the tutorial on developer.spotify.com",
//       "public": false
//   })

//   await fetchWebApi(
//     `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
//     'POST'
//   );

//   return playlist;
// }

// const createdPlaylist = await createPlaylist(tracksUri);
// console.log(createdPlaylist.name, createdPlaylist.id);

    return (
        <section>
                <h1>Hello From Playlist page</h1>
        </section>
    );
}

export default PlaylistPage;
