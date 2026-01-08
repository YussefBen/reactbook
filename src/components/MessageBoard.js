import { useState } from "react";
import MessageForm from "./MessageForm";
import PostCard from "./PostCard";

function MessageBoard({ searchTerm = "" }) {
    const [messages, setMessages] = useState([
        { id: 1, author: "Yussef", content: "Bienvenue sur le flux !" },
        { id: 2, author: "Scrum Master", content: "React est vraiment puissant." },
        { id: 3, author: "Admin", content: "N'oubliez pas de tester le mode sombre." }
    ]);

    const addMessage = (content) => {
        const newMessage = {
            id: Date.now(),
            author: "Moi", // Par défaut, l'auteur est "Moi"
            content: content
        };
        setMessages([...messages, newMessage]);         
    };  

    const filteredMessages = messages.filter((msg) =>
        msg.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <MessageForm onAddMessage={addMessage} />
            
            <div className="message-list" style={{ marginTop: "20px" }}>
                {filteredMessages.length > 0 ? (
                    filteredMessages.map((msg) => (
                        <PostCard 
                            key={msg.id} 
                            author={msg.author} 
                            content={msg.content} 
                        />
                    ))
                ) : (
                    <p>Aucun message ne correspond à votre recherche.</p>
                )}
            </div>
        </div>
    );
}

export default MessageBoard;
