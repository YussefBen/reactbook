import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useFormInput } from '../hooks/useFormInput';

function LoginForm() {
    // On récupère la fonction login du contexte global
    const { login } = useContext(AuthContext);
    
    // Utilisation du hook personnalisé pour les champs
    const email = useFormInput("");
    const password = useFormInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email.value.trim()) {
            // On envoie un objet utilisateur au contexte
            login({ 
                name: email.value.split('@')[0], 
                email: email.value 
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="email"
                {...email} // Remplace value et onChange
                placeholder="Email"
            />
            <input
                type="password"
                {...password} // Remplace value et onChange
                placeholder="Mot de passe"
            />
            <button type="submit">Se connecter</button>
        </form>
    );
}

export default LoginForm;