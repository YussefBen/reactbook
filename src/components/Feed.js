import { useEffect, useReducer } from "react";
import feedReducer from "../reducers/feedReducer";
import Header from "./Header";
import PostCard from "./PostCard";

const Feed = () => {
  // Initialisation du reducer avec un tableau vide
  const [state, dispatch] = useReducer(feedReducer, { posts: [] });

  // Simulation d'ajout de post pour le Header
  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      author: "Moi",
      content: "Nouveau post",
    };
    dispatch({ type: 'ADD_POST', payload: newPost });
  };

  // Mise à jour du titre selon le nombre de posts
  useEffect(() => {
    document.title = `ReactBook | ${state.posts.length} Posts`;
  }, [state.posts]);

  return (
    <div>
      <Header onAddPost={handleAddPost} />

      <p>Nombre de posts : {state.posts.length}</p>

      <div className="posts-list">
        {state.posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            // Actions envoyées au reducer
            onLike={() => dispatch({ type: 'TOGGLE_LIKE', payload: { id: post.id } })}
            onDelete={() => dispatch({ type: 'DELETE_POST', payload: { id: post.id } })}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;