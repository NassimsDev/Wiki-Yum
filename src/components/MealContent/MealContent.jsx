import "./MealContent.css"

export function MealContent({title, text, background, theme }){


    
    return (
        <section>
            <h3>{title}</h3>
            <div className={background ? `text-description highlight ` : "text-description"}> {/* pas toucher */}
                
                {/* pour chaque \n divise le texte en <p> */}
                {text.split("\n").map((part, i) => (
                    <p key={i}>{part}</p>
                ))}
            </div>
        </section>
    )
}