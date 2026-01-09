# TP ReactBook - Extension par Yussef

Ce projet est une version améliorée du TP ReactBook. J'ai ajouté plusieurs fonctionnalités pour rendre l'application plus interactive et plus propre visuellement.

## Description des fonctionnalités
- **Filtrage des posts** : Ajout d'une barre de recherche réactive permettant de filtrer les messages par auteur ou par contenu.
- **Interactions (Likes)** : Chaque carte de message possède un bouton "J'aime" fonctionnel avec une option de réinitialisation.
- **Navigation dynamique** : Utilisation de routes dynamiques pour accéder au profil des auteurs (`/user/nom`).
- **Gestion des erreurs (404)** : Redirection automatique vers l'accueil pour les URL inexistantes.
- **Mode Sombre** : Implémentation d'un toggle permettant de switcher entre le thème clair et sombre.

## Choix techniques
- **Context API** : Utilisation de `AuthContext` et `ThemeContext` pour une gestion globale de l'état (utilisateur connecté et préférences visuelles).
- **Routage** : Mise en place de `react-router-dom` avec des paramètres d'URL (`:username`).
- **Debug & Qualité** : 
    - Résolution du bug "NaN" sur les likes en typant correctement les props initiales.
    - **Refactorisation Git** : L'historique des commits a été nettoyé avant le rendu final pour présenter un journal de bord clair, logique et professionnel.

## Mode d'emploi
1. Installer les dépendances : `npm install`
2. Lancer le projet : `npm start`
3. Accéder au site : `http://localhost:3000`

## Tests effectués
- **Logique de recherche** : Vérification de l'insensibilité à la casse (case-insensitive).
- **Parcours utilisateur** : Test du flux complet (Connexion -> Publication -> Like -> Changement de thème).
