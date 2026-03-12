import { QuizAnswers } from "../../components/QuizAnswers/QuizzAnswers";
import { QuizHeader } from "../../components/QuizHeader/QuizzHeader";
import data from "../../data/boxes-data.json";
import "./Quiz.css";

const currentBox = data.box.mystery.entry;
const question = currentBox.quiz.question;
const allAnswers = currentBox.quiz.answers;
const imgSrc = currentBox.imageDish;

// // 1 Composant QuizHeader
// export function QuizHeader() {
//     return (
//         <div className="Quiz-Header">
//             <img src={imgSrc} alt="Illustration" />
//             <h1> {question} </h1>
//         </div>
//     );
// }

// // 2  Composant QuizAnswers
// export function QuizAnswers({ children }) {
//     return (
//         <div className="Quiz-Answers">
//             <button className="Quiz-Answers-Childs">{children}</button>
//         </div>
//     );
// }

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
