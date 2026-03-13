import "./MealContent.css"

export function MealContent({title, text, background}){

    return (
        <section>
            <h3>{title}</h3>
            <div className={background ? "text-description highlight" : "text-description"}>
                {/* pour chaque \n divise le texte en <p> */}
                {text.split("\n").map((part, i) => (
                    <p key={i}>{part}</p>
                ))}
            </div>
        </section>
    )
}