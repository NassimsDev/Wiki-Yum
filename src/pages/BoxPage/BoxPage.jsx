import "./BoxPage.css"
import bell from "../../assets/img/bell.png"
import starPink from "../../assets/img/star-pink.png"
import {ButtonLink} from "../../components/ButtonLink/ButtonLink"
import { BoxDishes } from "../../components/BoxDishes/BoxDishes"
import data from "../../data/boxes-data.json"

console.log(`/menu/${data.box.mystery.id}`)

export function BoxPage() {
  return (
    <main>
      <div className="box-page">
        <div className="box-page__image-group">
          <img src={bell} className="box-page__bell" alt="cloche" />

          <BoxDishes></BoxDishes>

          <img src={starPink} className="box-page__star box-page__star--large" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--big" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--medium" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--small" alt="etoile rose" />
        </div>

        <ButtonLink texte="Ouvrir" destination={`/menu/${data.box.mystery.id}`}></ButtonLink>
      </div>
    </main>
  )
}
