import { useNavigate } from 'react-router-dom'; 
import './Button.css';

function Button({ texte, destination, action, variante = "normal" }) {
  const navigate = useNavigate();

  const gererClic = () => {
    if (destination) {
      // S'il y a une "destination", on prend le routeur pour changer de page
      navigate(destination);
    } else if (action) {
      // Sinon, s'il y a une "action", on fait le travail demandé (ex: vérifier le quiz)
      action();
    }
  };

  return (
    <button 
      // On utilise la méthode BEM 
      className={`btn btn--${variante}`} 
      
      onClick={gererClic} 
    >
      {texte}
    </button>
  );
}

export default Button;