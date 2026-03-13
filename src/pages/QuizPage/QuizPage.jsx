import { useParams } from "react-router-dom";
import { QuizHeader } from "../../components/QuizHeader/QuizHeader.jsx";
import { QuizAnswers } from "../../components/QuizAnswers/QuizAnswers.jsx";
import data from "../../data/boxes-data.json";
import "./QuizPage.css";

export function QuizPage() {
    // 1. On récupère le nom de la box via l'URL (ex: /quiz/mystery)
    const { box } = useParams();

    // 2. On accède aux données dynamiquement en utilisant la variable 'box'
    // On cible .entry car le quiz est lié à l'entrée de la box
    const currentBox = data.box[box].entry;

    // 3. Extraction des données du JSON
    const questionTitre = currentBox.quiz.question;
    const reponses = currentBox.quiz.answers;
    const imageAffiche = currentBox.imageDish;

    return (
        <main className="Quiz-Container">
            {/* 4. Utilisation du Header avec les props nommées comme ta camarade */}
            <QuizHeader imageDish={imageAffiche} title={questionTitre} />

            {/* 5. Boucle sur les réponses avec la prop 'text' */}
            <div className="Quiz-Answers-List">
                {reponses.map((ans, index) => (
                    <QuizAnswers key={index} text={ans.text} />
                ))}
            </div>
        </main>
    );
}
