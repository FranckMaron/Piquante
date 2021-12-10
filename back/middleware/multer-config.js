//importation de multer
const multer = require("multer")

//Déclarations des extensions de fichiers
const MIME_TYPES = {
    "images/jpg" : "jpg",
    "images/jpeg" : "jpg",
    "images/png" : "png"
};

//Configuration du stockage d'image
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images")
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_");
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + "." + extension);
    }
});

module.exports = multer({ storage }).single("image");