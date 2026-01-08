import { useFormInput } from "../hooks/useFormInput";

function MessageForm({ onAddMessage }) {
    // On utilise le hook personnalisé à la place du useState
    const messageInput = useFormInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // On accède à la valeur via messageInput.value
        if (messageInput.value.trim() === "") return;
        
        onAddMessage(messageInput.value);
        // On utilise la fonction reset du hook
        messageInput.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                {...messageInput} // Ceci remplace value et onChange
                placeholder="Tapez votre message"
            />
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default MessageForm;