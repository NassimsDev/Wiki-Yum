import React from 'react';
import data from "../../data/boxes-data.json";
import MenuSection from "../../components/MenuSection/MenuSection.jsx";
import './MenuPage.css';

import imgBug from "../../assets/img/dish-bug-informatique.png";
import imgOurs from "../../assets/img/dish-ours-soldat.png";
import imgDanse from "../../assets/img/dish-epidemie-dansante.png";

function MenuPage() {
 
  const currentBox = data.box.mystery;

  return (
    <div className="menu-container">
      {/* les données de l'entrée au composant */}
      <MenuSection 
        type="Entrée"
        image={imgBug}
        theme={currentBox.entry.theme}
        question={currentBox.entry.shortQuestion}
      />
      
      {/* les données du plat principal */}
      <MenuSection 
        type="Plat"
        image={imgOurs}
        theme={currentBox.main.theme}
        question={currentBox.main.shortQuestion}
      />
      
      {/* les données du dessert */}
      <MenuSection 
        type="Dessert"
        image={imgDanse}
        theme={currentBox.dessert.theme}
        question={currentBox.dessert.shortQuestion}
      />
      
      
      <button className="atable-button">À table !</button>
    </div>
  );
}

export default MenuPage;
