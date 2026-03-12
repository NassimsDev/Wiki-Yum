import "./MealContent.css"

export function MealContent({title, text}){

    return (
        <section>
            <h3>{title}</h3>
            <p>{text}</p>
        </section>
    )
}