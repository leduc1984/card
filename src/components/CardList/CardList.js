import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";

function CardList({ cards, onViewCard }) {
  const [selectedSport, setSelectedSport] = useState("all");
  const [searchText, setSearchText] = useState("");

  // Filtrer les cartes par sport, nom de joueur et numéro de carte
  const filteredCards = cards.filter((card) => {
    if (selectedSport !== "all" && card.sport !== selectedSport) {
      return false;
    }
    if (!card.name.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Afficher la liste des cartes filtrées
  const cardList = filteredCards.map((card) => {
    return (
      <Card
        key={card.number}
        card={card}
        onViewCard={onViewCard}
      />
    );
  });

  // Fonction de mise à jour du filtre de sport
  const handleSportFilterChange = (event) => {
    setSelectedSport(event.target.value);
  };

  // Fonction de mise à jour du filtre de recherche
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="card-list">
      <div className="filters">
        <label htmlFor="sport-filter">Sport :</label>
        <select
          id="sport-filter"
          value={selectedSport}
          onChange={handleSportFilterChange}
        >
          <option value="all">Tous les sports</option>
          <option value="basketball">Basketball</option>
          <option value="football">Football</option>
          <option value="baseball">Baseball</option>
          <option value="hockey">Hockey</option>
        </select>
        <label htmlFor="search-filter">Recherche :</label>
        <input
          id="search-filter"
          type="text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
      <div className="card-list__cards">{cardList}</div>
    </div>
  );
}

export default CardList;
