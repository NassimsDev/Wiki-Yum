import React from 'react';
import './MenuSection.css';
export function MenuSection({ type, image, theme, question }) {
  return (
    <div className="menuSection">
      <img src={image} alt="" className="sectionImage" />

      <div className="titleContainer">
         <h2 className="sectionTitle">{type}</h2>
         <span className="themeBadge">{theme}</span>
      </div>
      <p className="questionText">{question}</p>
      
    </div>
  )
}