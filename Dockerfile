# 1) Image de base

FROM node:18-alpine

# 2) Dossier de travail
WORKDIR /app

# 3) Installation des dépendances
COPY package*.json ./
RUN npm install

# 4) Copie du reste du projet
COPY . .

# 5) Build de l'application
RUN npm run build

# 6) Exposition du port
EXPOSE 3000     

# 7) Démarrage de l'application
CMD ["npm", "start"]