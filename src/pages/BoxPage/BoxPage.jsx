import "./BoxPage.css"

import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import bell from "../../assets/img/bell.png"
import starPink from "../../assets/img/star-pink.png"
import data from "../../data/boxes-data.json"

import { ButtonLink } from "../../components/ButtonLink/ButtonLink"
import { BoxDishes } from "../../components/BoxDishes/BoxDishes"

export function BoxPage() {
  // Params à envoyer
  const boxList = []
  for (const key in data.box) {
    boxList.push(key)
  }

  // Étiquettes pour GSAP
  const bellRef = useRef(null)
  const dishesRef = useRef(null)
  const containerRef = useRef(null)
  const btnRef = useRef(null)

  // Animations
  useGSAP(() => {
    // Cloche
    gsap.from(bellRef.current, {
      scale: 0,
      duration: 1.0,
      ease: "elastic.out",
      delay: 0,
    })

    // Plats
    gsap.from(dishesRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "out",
      delay: 2.0,
    })

    // Étoiles
    gsap.from(".box-page__star", {
      scale: 0,
      rotation: 180,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.15,
      delay: 0.4,
    })

    // Bouton
    gsap.from(btnRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.8,
    })
  })

  return (
    <main>
      <div className="box-page">
        <div className="box-page__image-group" ref={containerRef}>
          <img ref={bellRef} src={bell} className="box-page__bell" alt="cloche" />

          <div ref={dishesRef}>
            <BoxDishes></BoxDishes>
          </div>

          <img src={starPink} className="box-page__star box-page__star--large" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--big" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--medium" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--small" alt="etoile rose" />
        </div>

        <div ref={btnRef}>
          <ButtonLink text="Ouvrir" destination={`/menu/${boxList[0]}`}></ButtonLink>
        </div>
      </div>
    </main>
  )
}
