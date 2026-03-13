import "./QuizHeader.css"

export function QuizHeader({ imageDish, question, title }) {
  const titleFirstCap = title[0].toUpperCase() + title.slice(1)
  return (
    <header className="Quiz-Header">
      <div className="Quiz-Header-Content">
        <img src={imageDish} alt={question} className="image-dish" />
        <p className="quiz-title">{titleFirstCap}</p>
        <h1 className="quiz-question">{question}</h1>
      </div>
    </header>
  )
}
