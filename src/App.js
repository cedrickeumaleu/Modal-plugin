import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

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
