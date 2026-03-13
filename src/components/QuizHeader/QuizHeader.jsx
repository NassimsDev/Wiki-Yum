import "./QuizHeader.css"

export function QuizHeader({ imageDish, question, title }) {
  return (
    <header className="Quiz-Header">
      <div className="Quiz-Header-Content">
        <img src={imageDish} alt={question} className="image-dish" />
        <h1>{title}</h1>
        <h1>{question}</h1>
      </div>
    </header>
  )
}
