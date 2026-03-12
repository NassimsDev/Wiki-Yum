import "./MealContent.css"

export function MealContent({title, description}){

    return (
        <section>
            <h3>{title}</h3>
            <p>{description}</p>
        </section>
    )
}