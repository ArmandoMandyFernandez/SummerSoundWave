import useAuth from "../../Functions/useAuth";
import { useState } from "react";
import TopTracks from "../../Components/TopTracks/TopTracks";
import UserProfile from "../../Components/UserProfile/UserProfile"; 
import ConfirmationModal from "../../Components/ConfirmationModal/ConfirmationModal";
import "./HomePage.scss"



function HomePage({ code }) {
    const accessToken = useAuth(code);
    const [isModalOpen, setIsModalOpen] = useState(false);  

    const handlePlaylistCreated = () => {
        setIsModalOpen(true);  
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);  
    };

    return (
        <section className="home">
            <UserProfile accessToken={accessToken} />
            <TopTracks accessToken={accessToken} onPlaylistCreated={handlePlaylistCreated}/>
            <ConfirmationModal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </section>
    );
}

export default HomePage;
