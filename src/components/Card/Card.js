import React from "react";
import "./Card.css";

function Card({ card, onClick }) {
  const handleClick = () => {
    onClick(card);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={card.frontImage} alt="Image recto" />
      <h3>{card.name}</h3>
      <p>{card.sport}</p>
      <p>{card.year}</p>
    </div>
  );
}

export default Card;
