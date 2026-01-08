import { useFormInput } from '../hooks/useFormInput';

const CreatePostForm = ({ dispatch }) => {
  const message = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.value.trim()) return;

    // Utilisation du dispatch pour ajouter un post
    dispatch({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        author: "Moi",
        content: message.value
      }
    });

    message.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        {...message} 
        placeholder="Quoi de neuf ?" 
      />
      <button type="submit">Publier</button>
    </form>
  );
};

export default CreatePostForm;