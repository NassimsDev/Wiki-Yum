import React from 'react';
import styles from './MenuSection.module.css';

function MenuSection({ type, image, theme, question }) {
  const themeClass = {
    "Technologie": styles.techno,
    "Histoire": styles.histoire,
    "Animaux": styles.animaux,
    "Médecine": styles.medecine,
    "Art": styles.art
  }[theme] || styles.defaultBadge;

  return (
    <div className={styles.menuSection}>
      
      {/* 1. L'image reprend sa place toute seule en haut */}
      <img 
        src={image} 
        alt={type} 
        className={styles.sectionImage} 
      />

      {/* 2. Le conteneur pour mettre le titre et le badge côte à côte */}
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>{type}</h2>
        
        {/* On applique le style de base + la couleur spécifique */}
        <span className={`${styles.themeBadge} ${themeClass}`}>
          {theme}
        </span>
      </div>

      {/* 3. La question tout en bas */}
      <p className={styles.questionText}>{question}</p>
      
    </div>
  );
}

export default MenuSection;