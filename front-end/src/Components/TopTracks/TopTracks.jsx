import { useEffect, useState } from "react";
import { Loader } from "rsuite";
import "./TopTracks.scss";
import axios from "axios";

function TopTracks({ accessToken }) {
    const [topTracks, setTopTracks] = useState([]);
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
        async function getTopTracks() {
            try {
                const tracksResponse = await fetchWebApi(
                    'v1/me/top/tracks?time_range=medium_term&limit=30', 'GET', accessToken
                );
                setTopTracks(tracksResponse.items);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching top tracks:", error);
            }
        }

        getTopTracks();
    }, [accessToken]);

    return (
        <div>
            <h2>Top Tracks</h2>
            {loading ? (
                <Loader size="lg" center />
            ) : (
                topTracks.map((track, index) => (
                    <li className="topTracks_list-item" key={track.id}>
                        <h3>{index + 1}.</h3>
                        <div>
                            <img
                                src={track.album.images[2].url}
                                alt="Album Cover"
                            />
                        </div>
                        <div>
                            <p>{track.name}</p>
                            <p>By: {track.artists
                                .map((artist) => artist.name)
                                .join(", ")}
                            </p>
                        </div>
                    </li>
                ))
            )}
        </div>
    );
}

export default TopTracks;
