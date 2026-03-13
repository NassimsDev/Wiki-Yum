import "./MealHeader.css"

export function MealHeader({imageDish, title, theme, imageWikipedia, alt}) {

    return (
        <header>
            <div className="top-description">
                <img className="image-dish" src={imageDish} alt={title} />
                <h1 className="">{title}</h1>
                <span>{theme}</span>
            </div>
            <img className="image-wiki" src={imageWikipedia} alt={alt}/>
        </header>
    )   
}