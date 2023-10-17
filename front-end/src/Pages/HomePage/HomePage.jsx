import useAuth from "../../Functions/useAuth";
import { useState, useCallback } from "react";
import TopTracks from "../../Components/TopTracks/TopTracks";
import UserProfile from "../../Components/UserProfile/UserProfile"; 
import ConfirmationModal from "../../Components/ConfirmationModal/ConfirmationModal";
import "./HomePage.scss"



function HomePage({ code }) {
    const accessToken = useAuth(code);
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [top5Tracks, setTop5Tracks] = useState([]);

    const handlePlaylistCreated = () => {
        setIsModalOpen(true);  
    };

    const handleTop5TracksFetched = useCallback((tracks) => {   
        setTop5Tracks(tracks);
    },[]);


    const handleCloseModal = () => {
        setIsModalOpen(false);  
    };

    return (
        <section className="home">
            <UserProfile accessToken={accessToken} />
            <TopTracks accessToken={accessToken} 
            onPlaylistCreated={handlePlaylistCreated}
            onTop5TracksFetched={handleTop5TracksFetched}/>
            <ConfirmationModal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal}
            top5Tracks={top5Tracks}/>
        </section>
    );
}

export default HomePage;
