import React, { useState } from "react";

import Modal from "react-modal";

import "./addMovie.css";

Modal.setAppElement("#root");

const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const [newMovie, setNewMovie] = useState({
    name: "",
    rating: "",
    date: "",
    description: "",
    image: "",
  });

  const handelChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            required
            
            onChange={handelChange}
          />
          <label>Movie Rate</label>
          <input
            type="text"
            name="rating"
            required
            
            onChange={handelChange}
          />
          <label>Movie Release Date</label>
          <input
            type="text"
            name="date"
            required
            
            onChange={handelChange}
          />
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            required
            
            onChange={handelChange}
          />
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            required
            
            onChange={handelChange}
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() => {
            addMovie(newMovie);
            closeModal();
          }}
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;