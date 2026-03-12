import data from "./data/boxes-data.json";
import "./styles/index.css";

const currentBox = data.box.mystery.entry;
const question = currentBox.quiz.question;
const allAnswers = currentBox.quiz.answers;
const imgSrc = currentBox.imageDish;

// 1 Composant QuizHeader
function QuizHeader() {
    return (
        <div className="Quiz-Header">
            <img src={imgSrc} alt="Illustration" />
            <h1> {question} </h1>
        </div>
    );
}

// 2  Composant QuizAnswers
function QuizAnswers({ children }) {
    return (
        <div className="Quiz-Answers">
            <button className="Quiz-Answers-Childs">{children}</button>
        </div>
    );
}

// La page Quiz
function App() {
    return (
        <main className="Quiz-Container">
            <QuizHeader />

            {allAnswers.map((ans, index) => (
                <QuizAnswers key={index}>{ans.text}</QuizAnswers>
            ))}
        </main>
    );
}

export default App;
