// import { QuizAnswers } from "../../components/QuizAnswers/QuizzAnswers";
// import { QuizHeader } from "../../components/QuizHeader/QuizzHeader";
import data from "../../data/boxes-data.json";
import "./Quiz.css";

const currentBox = data.box.mystery.entry;
const question = currentBox.quiz.question;
const allAnswers = currentBox.quiz.answers;
const imgSrc = currentBox.imageDish;


// La page Quiz

export function Quiz() {
    return (
        <main className="Quiz-Container">
            <QuizHeader />

            {allAnswers.map((ans, index) => (
                <QuizAnswers key={index}>{ans.text}</QuizAnswers>
            ))}
        </main>
    );
}
