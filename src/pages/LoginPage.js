import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Yussef" }); // Connexion avec un utilisateur Yussef
    alert("Connexion réussie !");
    navigate('/'); // Redirection vers la page d'accueil après connexion
  };

  return (
    <div>
      <h2>Page de Connexion</h2>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default LoginPage;