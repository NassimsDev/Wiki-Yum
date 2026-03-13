import { useParams } from "react-router-dom"
import { MenuSection } from "../../components/MenuSection/MenuSection"
import { ButtonLink } from "../../components/ButtonLink/ButtonLink"
import "./MenuPage.css"
import data from "../../data/boxes-data.json"

export function MenuPage() {
  const { box } = useParams()
  const courses = Object.keys(data.box[box])
  const titles = ["Entrée", "Plat", "Dessert"]

  return (
    <div className="menu-container">
      {courses.map((course) => {
        const meal = data.box[box][course]
        return (
          <MenuSection
            key={course}
            type={titles[meal.id]}
            image={meal.imageDish}
            theme={meal.theme}
            question={meal.shortQuestion}
          />
        )
      })}
      <ButtonLink destination={`/zoom/${box}/entry`} text="Commencer" />
    </div>
  )
}