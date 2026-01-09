import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    email.preventDefault();
    if (email.trim() !== '' && password.trim() !== '') {
      login({name: "Yussef", email: email});
      navigate('/');
    } else {
      alert('Veuillez entrer des informations valides.');
    }
  };

  return (
    <div style={{padding: '20px'}}>
      <h2>Page de Connexion</h2>
      <form onSubmit={handleLogin}>
        <div style={{marginBottom: '10px'}}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required
        />
        </div>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button type="submit">Se connecter</button>
    </div>
  );
};

export default LoginPage;