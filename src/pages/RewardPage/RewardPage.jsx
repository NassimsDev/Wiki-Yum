import "./RewardPage.css"

import dish1 from "../../assets/img/dish-bug-informatique.png"
import dish2 from "../../assets/img/dish-ours-soldat.png"
import dish3 from "../../assets/img/dish-epidemie-dansante.png"

export function RewardPage() {
    return (
        <div className="reward-container">
            <header className="header-reward">
                <h1 className="bravo-title">Bravo !</h1>
                
                <div className="dishes-row">
                     <img src={dish1} alt="plat informatique" className="small-dish" />
                     <img src={dish2} alt="plat joconde" className="main-dish" />
                     <img src={dish3} alt="plat ours" className="small-dish" />
                </div>

                <p className="reward-text">
                    Tu as répondu correctement à toutes les questions !
                </p>
            </header>

            <main className="reward-main">
                <h2 className="gain-title">Tu as gagné</h2>
                <div className="xp-badge">
                    +10XP
                </div>
            </main>
        </div>
    );
}