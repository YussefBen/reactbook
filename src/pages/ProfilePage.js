import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { username } = useParams(); // Extraction du paramètre :username

  return (
    <div>
      <h1>Profil de l'utilisateur : {username}</h1>
      <p>Bienvenue sur la page de profil de {username}.</p>
    </div>
  );
};

export default ProfilePage;