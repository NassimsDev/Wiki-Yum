import "./QuizHeader.css";

export function QuizHeader({ imageDish, question }) {
    return (
        <header className="Quiz-Header">
            <div className="Quiz-Header-Content">
                <img src={imageDish} alt={question} className="image-dish" />
                <h1>{question}</h1>
            </div>
        </header>
    );
}
