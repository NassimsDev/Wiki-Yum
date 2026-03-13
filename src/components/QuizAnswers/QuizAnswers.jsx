import "./QuizAnswers.css";

export function QuizAnswers({ text }) {
    return (
        <div className="Quiz-Answers">
            <button className="quiz-answer-button">{text}</button>
        </div>
    );
}
