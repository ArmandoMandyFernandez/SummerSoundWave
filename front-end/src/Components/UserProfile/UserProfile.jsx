import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "rsuite";

function UserProfile({ accessToken }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchWebApi(endpoint, method, body) {
        try {
            const res = await axios({
                method,
                url: `https://api.spotify.com/${endpoint}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                data: body,
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
        async function getMe() {
            try {
                const userResponse = await fetchWebApi(
                    'v1/me', 'GET'
                );
                setUser(userResponse);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        getMe();
    }, [accessToken]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    {user.images && user.images.length > 0 && (
                        <img src={user.images[0].url} alt="" />
                    )}
                    <h1>Hello {user.display_name}</h1>
                </div>
            )}
        </div>
    );
}

export default UserProfile;
