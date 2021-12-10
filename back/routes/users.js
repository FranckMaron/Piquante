const express = require("express");
const router = express.Router();

//Création du router
const userCtrl = require("../controllers/users")

//Importation des controleurs
router.post("/signup", userCtrl.signup)
router.post("/login", userCtrl.login)

module.exports = router;