import { ButtonLink } from "../ButtonLink/ButtonLink.jsx";
import "./QuizAnswers.css";

export function QuizAnswers({ text }) {
    return (
        <div className="Quiz-Answers-Item">
            <ButtonLink text={text} variante="quizz" destination="/" />
        </div>
    );
}
