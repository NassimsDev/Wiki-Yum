import { useNavigate } from "react-router-dom"
import "./ButtonLink.css"

import sonSucces from "../../assets/sounds/Win.mp3"
import sonErreur from "../../assets/sounds/Lost-.mp3"

const audioSucces = new Audio(sonSucces)
const audioErreur = new Audio(sonErreur)

export function ButtonLink({ text, destination, action, variante = "" }) {
  const navigate = useNavigate()

 const gererClic = () => {
    console.log("test")
    if (variante === "succes") {
      audioSucces.play()
    } else if (variante === "erreur") {
      audioErreur.play()
    }
    if (destination) {
      navigate(destination)
    } else if (action) {
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
