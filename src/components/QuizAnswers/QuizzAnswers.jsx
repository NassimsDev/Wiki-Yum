import "./QuizzAnswers.css";

// 2  Composant QuizAnswers
export function QuizAnswers({ children }) {
    return (
        <div className="Quiz-Answers">
            <button className="Quiz-Answers-Childs">{children}</button>
        </div>
    );
}
