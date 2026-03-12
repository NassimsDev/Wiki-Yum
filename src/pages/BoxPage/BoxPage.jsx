import "./BoxPage.css"
import cloche from "../../assets/img/cloche.png"
import starPink from "../../assets/img/star-pink.png"

export function BoxPage() {
  return (
    <main>
      <div className="box-page">
        <div className="box-page__image-group">
          <img src={cloche} className="box-page__cloche" alt="cloche" />
          <img src={starPink} className="box-page__star box-page__star--large" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--big" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--medium" alt="etoile rose" />
          <img src={starPink} className="box-page__star box-page__star--small" alt="etoile rose" />
        </div>
      </div>
    </main>
  )
}
