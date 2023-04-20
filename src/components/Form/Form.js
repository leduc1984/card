import React, { useState } from "react";
import "./Form.css";

function Form({ onAddCard, onImageUpload }) {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [year, setYear] = useState("");
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSportChange = (event) => {
    setSport(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleFrontImageUpload = (event) => {
    setFrontImage(event.target.files[0]);
  };

  const handleBackImageUpload = (event) => {
    setBackImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      sport,
      year,
      frontImage,
      backImage
    };
    onAddCard(formData);
    setName("");
    setSport("");
    setYear("");
    setFrontImage(null);
    setBackImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <div className="form-group">
        <label htmlFor="name">Nom du joueur</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="sport">Sport</label>
        <select id="sport" value={sport} onChange={handleSportChange} required>
          <option value="">--Choisir un sport--</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="tennis">Tennis</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="year">Année</label>
        <input type="number" id="year" value={year} onChange={handleYearChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="front-image">Image recto</label>
        <input type="file" id="front-image" accept=".jpg, .jpeg, .png" onChange={handleFrontImageUpload} required />
      </div>
      <div className="form-group">
        <label htmlFor="back-image">Image verso</label>
        <input type="file" id="back-image" accept=".jpg, .jpeg, .png" onChange={handleBackImageUpload} required />
      </div>
      <div className="form-group">
        <button type="submit">Ajouter</button>
      </div>
    </form>
  );
}

export default Form;


