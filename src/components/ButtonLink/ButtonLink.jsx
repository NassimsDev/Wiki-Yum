import { useNavigate } from "react-router-dom"
import "./ButtonLink.css"

import sonSucces from "../../assets/sounds/Win.mp3"
import sonErreur from "../../assets/sounds/Lost.mp3"

const audioSucces = new Audio(sonSucces)
const audioErreur = new Audio(sonErreur)

export function ButtonLink({ text, destination, action, variante = "" }) {
  const navigate = useNavigate()

  const gererClic = () => {
    if (variante === "succes") {
      audioSucces.play()
    } else if (variante === "erreur") {
      audioErreur.play()
    }

    if (destination) {
      setTimeout(() => {
        navigate(destination)
      }, 500)
      // S'il y a une "destination", on prend le routeur pour changer de page
    } else if (action) {
      // Sinon, s'il y a une "action", on fait le travail demandé (ex: vérifier le quiz)
      action()
    }
  }

  return (
    <button
      // On utilise la méthode BEM
      className={`btn btn--${variante}`}
      onClick={gererClic}
    >
      {text}
    </button>
  )
}
