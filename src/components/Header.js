import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext'; // Vérifie bien le chemin

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="App-header">
      <h1>ReactBook</h1>
      
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Mode Sombre 🌙' : 'Mode Clair ☀️'}
        </button>

        {user ? (
          <>
            <span>Connecté : <strong>{user.username}</strong></span>
            <button onClick={logout} style={{ backgroundColor: '#ff4d4d', color: 'white' }}>
              Déconnexion
            </button>
          </>
        ) : (
          <span>Invité</span>
        )}
      </div>
    </header>
  );
};

export default Header;