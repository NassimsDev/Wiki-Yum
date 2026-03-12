import "./MealHeader.css"

export function MealHeader({imageFood, title, theme, shortQuestion, image}) {

    return (
        <header>
            <img src={imageFood} alt={imageFoodAlt} />
            <h1 className="short-question">{shortQuestion}</h1>

            <div>
                <div>
                    <h2 className="title">{title}</h2>
                    <h2 className="theme">{theme}</h2>
                </div>
                <img src={image} alt={imageAlt} />
            </div>
        </header>
    )
}