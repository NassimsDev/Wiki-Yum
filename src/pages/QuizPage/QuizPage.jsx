import { useParams } from "react-router-dom";
import { QuizHeader } from "../../components/QuizHeader/QuizHeader.jsx";
import { QuizAnswers } from "../../components/QuizAnswers/QuizAnswers.jsx";
import data from "../../data/boxes-data.json";
import "./QuizPage.css";

export function QuizPage() {
    const { box } = useParams();

    // Sécurité : on vérifie si la box existe pour éviter la page blanche
    const currentBox = data.box[box]?.entry;

    if (!currentBox) return <div>Box non trouvée</div>;

    const questionTitre = currentBox.quiz.question;
    const reponses = currentBox.quiz.answers;
    const imageAffiche = currentBox.imageDish;
    
    

    return (
        <main className="Quiz-Container">
            <QuizHeader imageDish={imageAffiche} question={questionTitre} />

            <div className="Quiz-Answers-List">
                {reponses.map((ans, index) => (
                    <QuizAnswers key={index} text={ans.text} />
                ))}
            </div>
        </main>
    );
}
