import { useState } from "react";
import { Link } from "react-router-dom";

const PostCard = ({ author, content, initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);
  
  // États pour les commentaires
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => setLikes(prev => prev + 1);
  const handleReset = () => setLikes(initialLikes);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="post-card" style={{ border: "1px solid #ddd", padding: "15px", margin: "10px 0", borderRadius: "10px" }}>
      <h3>
        <Link to={`/user/${author}`} className="author-link" style={{ color: "#6a1b9a", textDecoration: "none" }}>
          {author}
        </Link>
      </h3>

      <p>{content}</p>
      <p>Likes: <strong>{likes}</strong></p>

      <div className="post-actions">
        <button onClick={handleLike}>J’aime ♡</button>
        <button onClick={handleReset} style={{ marginLeft: "5px" }}>Réinitialiser</button>
      </div>

      {/* Section Commentaires */}
      <div style={{ marginTop: "20px", background: "#f9f9f9", padding: "10px", borderRadius: "5px" }}>
        <strong>Commentaires ({comments.length})</strong>
        
        <ul style={{ paddingLeft: "20px", margin: "10px 0", fontSize: "0.9em" }}>
          {comments.map((c, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>{c}</li>
          ))}
        </ul>

        <form onSubmit={handleAddComment} style={{ display: "flex", gap: "5px" }}>
          <input 
            type="text" 
            placeholder="Ajouter un commentaire..." 
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            style={{ flex: 1, padding: "5px" }}
          />
          <button type="submit">Poster</button>
        </form>
      </div>
    </div>
  );
};

export default PostCard;