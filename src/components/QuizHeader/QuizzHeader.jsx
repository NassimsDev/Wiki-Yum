import "./QuizzAnswers.css";

// 1 Composant QuizHeader
export function QuizHeader() {
    return (
        <div className="Quiz-Header">
            <img src={imgSrc} alt="Illustration" />
            <h1> {question} </h1>
        </div>
    );
}
