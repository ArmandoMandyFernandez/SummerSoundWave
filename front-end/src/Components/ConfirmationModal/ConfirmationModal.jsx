import "./ConfirmationModal.scss";
import girl from "../../Assets/SummerSoundWave.png"

function ConfirmationModal({ isOpen, onClose, top5Tracks }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <div>
                    <span className="modal_close" onClick={onClose}>
                        &times;
                    </span>
                </div>

                <div>
                    <h2 className="modal_header">
                        Playlist created successfully!
                    </h2>
                    <p>Enjoy your new playlist!</p>
                    <p>
                        Share the top 5 songs of your SummerSoundWave with your
                        friends!
                    </p>
                </div>

                <div className="topFive_card">

                <div className="topFive_image-container">
                    <img src={girl} alt="soundwave icon of girl"  className="topFive_image"/>
                </div>
                
                {top5Tracks && top5Tracks.length > 0 && (
                    <div className="topFive_outer-container">
                        <div className="topFive_header-container">
                            <h3>My Top 5 SummerSoundWave</h3>
                        </div>
                        {top5Tracks.map((track, index) => (
                            <div className="topFive_container" key={track.id}>
                                <div className="topFive_container-number">
                                    <h3 className="topFive_list-number">
                                        {index + 1}.
                                    </h3>
                                </div>
                                <div className="topFive_container-image">
                                    <img
                                        src={track.album.images[2].url}
                                        alt="Album Cover"
                                    />
                                </div>
                                <div className="topFive_container-info">
                                    <p className="topFive_list-name">
                                        {track.name}
                                    </p>
                                    <p className="topFive_list-artist">
                                        {track.artists
                                            .map((artist) => artist.name)
                                            .join(", ")}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
