import "./BoxDishes.css";
import entry from "/img/dish-bug-informatique.png";
import main from "/img/dish-ours-soldat.png";
import dessert from "/img/dish-epidemie-dansante.png";
import base from "/img/dish-base.png";

export function BoxDishes() {
    return (
        <div className="box-dishes">
            {/* Base plateau */}
            <img src={base} className="box-dishes__plate" alt="plateau" />

            {/* Plats */}
            <img
                src={dessert}
                className="box-dishes__item box-dishes__item--top"
                alt="dessert"
            />

            <img
                src={entry}
                className="box-dishes__item box-dishes__item--right"
                alt="entrée"
            />

            <img
                src={main}
                className="box-dishes__item box-dishes__item--left"
                alt="plat"
            />
        </div>
    );
}
