import { useParams, useNavigate } from "react-router-dom"
import { QuizHeader } from "../../components/QuizHeader/QuizHeader.jsx"
import { QuizAnswers } from "../../components/QuizAnswers/QuizAnswers.jsx"
import { ButtonLink } from "../../components/ButtonLink/ButtonLink.jsx"
import data from "../../data/boxes-data.json"

import "./QuizPage.css"

export function QuizPage() {
  const { box, course } = useParams()
  const navigate = useNavigate()

  const meal = data.box[box][course]
  const courses = ["entry", "main", "dessert"]

  console.log("meal ->", meal)

  const link = course === "dessert" ? "/box" : `/quiz/${box}/${courses[meal.id + 1]}`

  console.log("LINK", link)

  function handleAnswerClick(answer) {
    if (answer.correct) {
      navigate(link)
    } else {
      console.log("mauvaise réponse")
    }
  }

  return (
    <main className="Quiz-Container">
      <QuizHeader imageDish={meal.imageDish} question={meal.quiz.question} />

      <div className="Quiz-Answers-List">
        {meal.quiz.answers.map((answer, index) => (
          <ButtonLink
            key={index}
            text={answer.text}
            action={() => handleAnswerClick(answer)}
            variante="reponse"
          ></ButtonLink>
        ))}
      </div>
    </main>
  )
}
