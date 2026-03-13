import "./QuizHeader.css";

// On utilise les props { image, titre } pour que le composant soit réutilisable
export function QuizHeader({ image, titre }) {
    return (
        <div className="Quiz-Header">
            <img src={image} alt="Illustration de la question" />
            <h1>{titre}</h1>
        </div>
    );
}
