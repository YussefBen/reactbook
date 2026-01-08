import { useState } from 'react';
import MessageBoard from '../components/MessageBoard';

const FeedPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="feed-page" style={{ padding: "20px" }}>
      <h1>Fil d'actualité</h1>
      <p>Bienvenue sur votre flux, voici les derniers messages :</p>
      
      {/*Barre de recherche */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Rechercher un post ou un auteur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>

    
      <MessageBoard searchTerm={searchTerm} />
    </div>
  );
};

export default FeedPage;