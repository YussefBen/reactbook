import { useState } from 'react';

export default function InputLogger() {
  const [text, setText] = useState(''); // état pour stocker le texte saisi

  const handleChange = (e) => {
    console.log(e); // Affiche l'événement
    setText(e.target.value); // mise à jour la valeur affichée
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Tu as écrit : {text}</p> 
    </div>
  );
}
