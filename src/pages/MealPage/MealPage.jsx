import { MealHeader } from "../../components/MealHeader/MealHeader";
import { MealContent } from "../../components/MealContent/MealContent";
import "./MealPage.css"

export function MealPage() {
    const { box, course } = useParams()
    const meal = data.box[box][course]

    return (
        <>
        <MealHeader
        title={meal.title}
        shortQuestion={meal.shortQuestion}
        imageDish={meal.imageDish}
        imageWikipedia={meal.imageWikipedia}
        theme={meal.theme}
        />
        <MealContent title="Description" text={meal.description} />
        <MealContent title="Anecdote" text={meal.anecdote} />
        </>
    )
}