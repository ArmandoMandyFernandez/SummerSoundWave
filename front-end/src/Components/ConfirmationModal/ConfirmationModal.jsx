import "./ConfirmationModal.scss";
import girl from "../../Assets/theSixMix.png";
import { useRef } from "react";
import domtoimage from "dom-to-image-more";

function ConfirmationModal({ isOpen, onClose, top5Tracks }) {
    const printRef = useRef();
    if (!isOpen) {
        return null;
    }

    const handleDownloadImage = async () => {
        const element = printRef.current;

        domtoimage
            .toJpeg(element)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "the-6Mix.jpeg";
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error("Error while creating image", error);
            });
    };

    return (
        <div className="modal">
            <div className="modal_content">
                <div>
                    <span className="modal_close" onClick={onClose}>
                        &times;
                    </span>
                </div>

                <div className="modal_header-container">
                    <h2 className="modal_header">
                        Playlist created successfully!
                    </h2>
                    <div className="modal_header-description-container">
                        <p className="modal_header-description">
                            Now go ahead and head to Spotify to check out your
                            new playlist!
                        </p>
                        <p className="modal_header-description">
                            Share the top 5 songs of your 6Mix with your
                            friends!
                        </p>
                    </div>
                </div>
                {/* You want to pirnt this card */}
                <div className="topFive_card" ref={printRef} id="card">
                    <div className="topFive_image-container">
                        <img
                            src={girl}
                            alt="soundwave icon of girl"
                            className="topFive_image"
                        />
                    </div>

                    {top5Tracks && top5Tracks.length > 0 && (
                        <div className="topFive_outer-container">
                            <div className="topFive_header-container">
                                <h3 className="topFive_header-heading">
                                    The Top 5
                                </h3>
                                <h3 className="topFive_header-heading">
                                    on My 6Mix
                                </h3>
                            </div>
                            {top5Tracks.map((track, index) => (
                                <div
                                    className="topFive_container"
                                    key={track.id}
                                >
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
                    <div className="topFive_closing-caption-container">
                        <p className="topFive_closing-caption">
                            Made by @Man_dee
                        </p>
                    </div>
                </div>
                <div className="topFive_button-container">
                    <button
                        type="button"
                        onClick={handleDownloadImage}
                        className="topFive_button"
                    >
                        Download as Image
                    </button>
                    {/* You want to pring this card */}
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
