import useAuth from "../../Functions/useAuth";
import TopTracks from "../../Components/TopTracks/TopTracks";
import UserProfile from "../../Components/UserProfile/UserProfile"; 


function HomePage({ code }) {
    const accessToken = useAuth(code);

    return (
        <section>
            <UserProfile accessToken={accessToken} />
            <TopTracks accessToken={accessToken}/>
        </section>
    );
}

export default HomePage;
