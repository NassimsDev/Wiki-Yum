import { useParams } from "react-router-dom";

import { MealHeader } from "../../components/MealHeader/MealHeader";
import { MealContent } from "../../components/MealContent/MealContent";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import "./MealPage.css";
import data from "../../data/boxes-data.json";

export function MealPage() {
    const { box, course } = useParams();
    const meal = data.box[box][course];
    const titles = ["Entrée", "Plat", "Dessert"];
    // Si c'est le dessert on va au quiz, sinon on passe au plat suivant via zoom
    const courses = ["entry", "main", "dessert"];
    const link =
        course === "dessert"
            ? `/quiz/${box}/entry`
            : `/zoom/${box}/${courses[meal.id + 1]}`;

    return (
        <div className="meal-container">
            <MealHeader
                alt={meal.title}
                title={titles[meal.id]}
                imageDish={meal.imageDish}
                imageWikipedia={meal.imageWikipedia}
                theme={meal.theme}
            />
            <MealContent title={meal.title} text={meal.description} />
            <MealContent
                title="Anecdote"
                text={meal.anecdote}
                background={true}
            />
            <ButtonLink destination={link} text="Encore faim ?">
                {" "}
            </ButtonLink>
        </div>
    );
}
