import "./ConfirmationModal.scss";

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
                    <p>Thanks for creating your playlist.</p>
                    <p>
                        Share the top 5 songs of your SummerSoundWave with your
                        friends!
                    </p>
                </div>
                
                {top5Tracks && top5Tracks.length > 0 && (
                    <div>
                        {top5Tracks.map((track, index) => (
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
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ConfirmationModal;
