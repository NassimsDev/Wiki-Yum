 import './Button.css';

function Button({ texte, destination }) {
  const navigate = useNavigate();

  return (
    <button 
      className="bouton-style" 
      onClick={() => navigate(destination)}
    >
      {texte}
    </button>
  );
}

export default Bouton;