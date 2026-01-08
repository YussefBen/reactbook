import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // 
    const controller = new AbortController();

    // Requête API
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      signal: controller.signal
    })
      .then(response => response.json())
      .then(data => {
        setUser(data); 
        setIsLoading(false);
      })
      .catch(error => {
        if (error.name !== "AbortError") {
          console.error("Erreur :", error);
        }
      });

    return () => {
      controller.abort(); 
    };
  }, []);

  // Affichage
  if (isLoading) {
    return <p>Chargement...</p>;
  }

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h3>{user.name}</h3>
      <p>Email : {user.email}</p>
      <p>Entreprise : {user.company.name}</p>
    </div>
  );
};

export default UserProfile;
