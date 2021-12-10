const express = require("express")

//Création d'un router
const router = express.Router();

//Importation des controleurs et middlewares
const sauceCtrl = require("../controllers/sauces")
const auth = require("../middleware/auth")
const multer = require("../middleware/multer-config");


router.post("/", auth, multer, sauceCtrl.createSauce)
router.put("/:id", auth, multer, sauceCtrl.modifySauce )
router.delete("/:id", auth, sauceCtrl.deleteSauce)
router.get('/', auth, sauceCtrl.getAllSauces);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post('/:id/like', auth, sauceCtrl.likeDislike)

  module.exports = router;
