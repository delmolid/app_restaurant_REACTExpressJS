const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const data = require('./data.json');
const Thing = require('./models/Thing');

const app = express();

// Important : ajoutez ceci avant vos routes
app.use(express.json());

const port = process.env.PORT || 3000;

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'restaurant'  // Changez 'test' par 'restaurant' ou le nom que vous souhaitez
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée !', error));

// Middleware CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.get('/data', (req, res) => {
    res.json(data);
})

app.post('/data', (req,res,next) => {
const thing = new Thing({
    plate: req.body.plate,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
}); 

thing.save()
    .then(() => res.status(201).json({message: 'Objet enregistré !'}))
    .catch((error) => res.status(400).json({error}));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});







