import styles from './MenuSection.module.css'

export function MenuSection({ type, image, theme, question }) {
  return (
    <div className={styles.menuSection}>
      <img src={image} alt="" className={styles.sectionImage} />
      <h2 className={styles.sectionTitle}>{type}</h2>
      <span className={styles.themeBadge}>{theme}</span>
      <p className={styles.questionText}>{question}</p>
    </div>
  )
}