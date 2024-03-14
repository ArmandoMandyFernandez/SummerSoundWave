import { useEffect, useState } from "react";
import { Loader } from "rsuite";
import "./TopTracks.scss";
import axios from "axios";
import MakePlaylistButton from "../MakePlaylistButton/MakePlaylistButton";

function TopTracks({ accessToken, onPlaylistCreated, onTop5TracksFetched }) {
    const [topTracks, setTopTracks] = useState([]);
    const [trackIds, setTrackIds] = useState([]);
    const [topFive, setTopFive] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchWebApi(endpoint, method, accessToken) {
        try {
            const res = await axios({
                method,
                url: `https://api.spotify.com/${endpoint}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (res.status !== 200) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            return res.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

    useEffect(() => {
        if (!accessToken){
            return;
        }  

        async function getTopTracks() {
            try {
                const tracksResponse = await fetchWebApi(
                    "v1/me/top/tracks?time_range=medium_term&limit=30",
                    "GET",
                    accessToken
                );
                setTopTracks(tracksResponse.items);
                setTopFive(tracksResponse.items.slice(0,5));
                // console.log('Top Five Tracks:', tracksResponse.items.slice(0,5));
                if (onTop5TracksFetched){
                    onTop5TracksFetched(tracksResponse.items.slice(0,5));
                }
                const ids = tracksResponse.items.map((track) => track.id);
                setTrackIds(ids);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching top tracks:", error);
            }
        }

        getTopTracks();
    }, [accessToken, onTop5TracksFetched]);
    

    const handlePlaylistButtonClicked = () => {
        onPlaylistCreated();
    };

    // eslint-disable-next-line
    // console.log(topFive)

    return (
        <div className="topTracks">
            <div className="topTracks_container-header">
                <h2 className="topTracks_header"> Here are your Top Tracks:</h2>
                <MakePlaylistButton
                    trackIds={trackIds}
                    accessToken={accessToken}
                    onClick={handlePlaylistButtonClicked}
                />
            </div>
            {loading ? (
                <Loader size="lg" center />
            ) : (
                topTracks.map((track, index) => (
                    <div className="topTracks_container" key={track.id}>
                            <div className="topTracks_container-number">
                                <h3 className="topTracks_list-number">
                                    {index + 1}.
                                </h3>
                            </div>
                            <div className="topTracks_container-image">
                                <img
                                    src={track.album.images[2].url}
                                    alt="Album Cover"
                                />
                            </div>
                            <div className="topTracks_container-info">
                                <p className="topTracks_list-name">
                                    {track.name}
                                </p>
                                <p className="topTracks_list-artist">
                                    {track.artists
                                        .map((artist) => artist.name)
                                        .join(", ")}
                                </p>
                            </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default TopTracks;
