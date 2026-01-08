# TP ReactBook - Extension par Yussef

Ce projet est une version améliorée du TP ReactBook. J'ai ajouté plusieurs fonctionnalités pour rendre l'application plus interactive et plus propre visuellement.

## Description des fonctionnalités
- **Filtrage des posts** : J'ai ajouté une barre de recherche réactive. On peut filtrer les messages par le nom de l'auteur ou par le texte du message.
- **Interactions (Likes)** : Chaque carte de message a maintenant un bouton "J'aime" et un bouton pour remettre à zéro.
- **Navigation dynamique** : En cliquant sur le nom d'un auteur, on arrive sur sa page de profil (`/user/nom`).
- **Sécurité et Erreurs** : Si on tape une URL qui n'existe pas, l'app nous renvoie automatiquement à l'accueil.
- **Mode Sombre** : Un bouton permet de passer du thème clair au thème sombre.

## Mes choix techniques
- **Context API** : J'ai utilisé deux Contextes (Auth et Theme). C'était plus simple pour que le mode sombre et l'utilisateur connecté fonctionnent sur toutes les pages en même temps.
- **Routage** : J'ai utilisé `react-router-dom` avec des paramètres dynamiques (`:username`) pour les profils.
- **Gestion du bug NaN** : Au début, les likes affichaient "NaN". J'ai réglé ça en forçant la valeur par défaut à 0 dans les props de la PostCard.

## Mode d'emploi
1. Installer les dossiers : `npm install`
2. Lancer le site : `npm start`
3. Le site s'ouvre sur `http://localhost:3000`.

## Tests
- **Test de logique** : J'ai vérifié manuellement que la recherche ne fait pas de différence entre les majuscules et les minuscules.
- **Test d'interaction** : J'ai testé le scénario complet : se connecter -> poster un message -> vérifier que le bouton like fonctionne -> changer de thème.
