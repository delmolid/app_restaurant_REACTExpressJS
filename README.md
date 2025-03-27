# Application de Restaurant React + Express

Une application web full-stack de gestion de menu de restaurant, utilisant React (Vite) pour le frontend et Express.js + MongoDB pour le backend.

## 🚀 Technologies Utilisées

### Frontend
- React (avec Vite)
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Tests API
- Bruno

## 📋 Prérequis

- Node.js
- Compte MongoDB Atlas
- npm
- Bruno (pour tester les API)

## 🛠️ Installation

1. **Installation des dépendances Backend**
bash
cd backend
npm install

2. **Installation des dépendances Frontend**
bash
cd ../frontend
npm install

3. **Configuration MongoDB Atlas**
    - Créez une base de données MongoDB Atlas
    - Remplacez `process.env.MONGODB_URI` dans `backend/src/script.js` par votre URI MongoDB Atlas
    - Remplacez `dbName: 'test'` par `dbName: 'restaurant'` dans `backend/src/script.js`

## 📦 Structure du Projet

    backend/
    frontend/
    README.md
    package.json
    package-lock.json
    .env
    .gitignore  

             
