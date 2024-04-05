import React from "react";

const Modal = ({ isOpen, onClose, message }) => {
  // Fonction pour gérer la fermeture du modal
  const handleClose = () => {
    onClose(); // Appel de la fonction onClose pour notifier le parent de la fermeture du modal
  };

  // Si la modal est fermée, ne rien afficher
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
