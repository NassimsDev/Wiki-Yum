import { MealHeader } from "../../components/MealHeader/MealHeader";
import { MealContent } from "../../components/MealContent/MealContent";
import "./MealPage.css"
import dataArtBox from "../../data/new-art-box.json"
import data from "../../data/mystery-box.json"
import { useState } from "react";

export function MealPage() {
    const [index, setIndex] = useState(1)
    return (
        <>
        <MealHeader>

        </MealHeader>
        <MealContent title = {dataArtBox}></MealContent>
        </>
    )   
}