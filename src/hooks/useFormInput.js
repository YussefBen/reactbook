import { useState } from "react";

// Ce hook gère la logique d'un champ de texte
export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  // Met à jour la valeur quand on tape
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
    reset: () => setValue(""), // Pour vider le champ après envoi
  };
}