import "./ZoomPage.css"

import { ButtonLink } from "../../components/ButtonLink/ButtonLink"
import { useParams } from "react-router-dom"

import data from "../../data/boxes-data.json"

export function ZoomPage() {
  const { box, course } = useParams()
  const meal = data.box[box][course]
  const titles = ["Entrée", "Plat", "Dessert"]
  const link = `/meal/${box}/${course}`

  return (
    <div className="header-zoom">
      <div className="div-container">
        <img className="image-dish" src={meal.imageDish} alt={titles[meal.id]} />
        <h1 className="">{titles[meal.id]}</h1>
        <span>{meal.theme}</span>
        <p className="short-question">{meal.shortQuestion}</p>
      </div>
      <ButtonLink destination={link} text="Déguster">
        {" "}
      </ButtonLink>
    </div>
  )
}
