import "./QuizHeader.css";

export function QuizHeader({ imageDish, title }) {
    return (
        <header className="Quiz-Header">
            <div className="Quiz-Header-Content">
                <img src={imageDish} alt={title} className="image-dish" />
                <h1>{title}</h1>
            </div>
        </header>
    );
}
