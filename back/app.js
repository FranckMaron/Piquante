//Installation des dépendances
const express = require("express"); //framework basé sur Node
const bodyParser = require("body-parser"); //permet de lire le corps de la requete
const mongoose = require("mongoose"); //facilite l'utilisation de la base de donnée
const path = require("path"); //Permet la gestion des repertoires de fichier
const helmet = require('helmet'); //Gere les failles de sécurité

//Importation des router
const sauceRoutes = require("./routes/sauces");
const userRoutes = require("./routes/users");

//Création de l'application express
const app = express();

//connection à la base de donnée
mongoose
  .connect(
    "mongodb+srv://Franck:kyky54390@cluster0.pcjvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//création des routes(middleware)
//Ajout des headers CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use(helmet());

app.use("/images", express.static(path.join(__dirname, "images")));

//Routes
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
