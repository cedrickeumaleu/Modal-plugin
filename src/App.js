import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  // gestion de l'état du modal par défaut il est à false
  const [isOpen, setIsOpen] = useState(false);

  // fonction d'ouverture du modal (true)
  const openModal = () => {
    setIsOpen(true);
  };

  // fonction de fermeture du modal (false)
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button className="openModal" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        message="Employee Created! "
      />
    </div>
  );
};

export default App;
