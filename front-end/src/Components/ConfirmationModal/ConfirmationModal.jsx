// import "./ConfirmationModal.scss"; uncomment when created

function ConfirmationModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>Playlist created successfully!</p>
            </div>
        </div>
    );
}

export default ConfirmationModal;

