import "./MealHeader.css"

export function MealHeader({imageDish, title, theme, shortQuestion, imageWikipedia}) {

    return (
        <header>
            <img src={imageDish} alt="" />
            <h1 className="short-question">{shortQuestion}</h1>
            <div>
                <div>
                    <h2 className="title">{title}</h2>
                    <h2 className="theme">{theme}</h2>
                </div>
                <img src={imageWikipedia} alt={title} />
            </div>
        </header>
    )
}