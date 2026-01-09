import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const emailLogin ="yussef@react.com";
    const passwordLogin ="react123";

    if(email === emailLogin && password === passwordLogin){
      login({name: "Yussef", email: email});
      navigate('/');
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className='login-container'>
      <div className='login-card'>
      <h2>Page de Connexion</h2>
      <form onSubmit={handleLogin}>
       <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required
        />
        <input
        className='login-input'
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
        />
      <button type="submit" className='login-button'>Se connecter</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;