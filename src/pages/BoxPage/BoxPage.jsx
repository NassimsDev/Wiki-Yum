import "./BoxPage.css"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import bell from "../../assets/img/bell.png"
import starPink from "../../assets/img/star-pink.png"
import data from "../../data/boxes-data.json"

import { ButtonLink } from "../../components/ButtonLink/ButtonLink"
import { BoxDishes } from "../../components/BoxDishes/BoxDishes"

export function BoxPage() {
  // Étiquettes pour GSAP

  const boxList = []
  for (const key in data.box) {
    boxList.push(key)
  }

  const bellRef = useRef(null)
  const dishesRef = useRef(null)

  // Animations
  useGSAP(() => {
    // Cloche
    gsap.from(bellRef.current, {
      scale: 0,
      duration: 1.0,
      ease: "elastic.out",
      delay: 0.5,
    })

    // Dishes

    // Étoiles
  })

  return (
    <main>
      <div className="box-page">
        <div className="box-page__image-group">
          <img ref={bellRef} src={bell} className="box-page__bell" alt="cloche" />

          <div ref={dishesRef}>
            <BoxDishes></BoxDishes>
          </div>

          <img src={starPink} className="box-page__star box-page__star--large" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--big" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--medium" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--small" alt="etoile rose" />
        </div>

        <ButtonLink text="Ouvrir" destination={`/menu/${boxList[0]}`}></ButtonLink>
      </div>
    </main>
  )
}
