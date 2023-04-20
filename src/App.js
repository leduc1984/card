import React, { useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Form from "./components/Form/Form";

function App() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Fonction pour ajouter une carte
  const handleAddCard = (formData) => {
    const newCard = {
      name: formData.name,
      sport: formData.sport,
      year: formData.year,
      frontImage: formData.frontImage,
      backImage: formData.backImage
    };
    setCards([...cards, newCard]);
    setCurrentCard(newCard);
  };

  // Fonction pour afficher une carte
  const viewCard = (card) => {
    setCurrentCard(card);
  };

  // Fonction pour télécharger une image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="App">
      <header>
        <h1>Ma collection de cartes de sport</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Form onAddCard={handleAddCard} onImageUpload={handleImageUpload} />
          </div>
          <div className="col-md-8">
            <CardList cards={cards} onViewCard={viewCard} />
          </div>
        </div>
        {currentCard && (
          <div className="card-preview">
            <h2>Prévisualisation de la carte</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="front">
                  <img src={previewImage} alt="Image recto" />
                  <h3>{currentCard.name}</h3>
                  <p>{currentCard.sport}</p>
                  <p>{currentCard.year}</p>
                  <p>Recto</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="back">
                  <img src={previewImage} alt="Image verso" />
                  <h3>{currentCard.name}</h3>
                  <p>{currentCard.sport}</p>
                  <p>{currentCard.year}</p>
                  <p>Verso</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
