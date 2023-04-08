const express = require("express");
const router = express.Router();
const validation = require('../middlewares/validation.js')
const userController = require("../controllers/userController.js");
const multer = require('multer')
router.use(express.urlencoded({ extended: false }));
// Implentacion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/usuarios')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})
const upload = multer({storage: storage})

router.get("/register",userController.register);
router.post('/register',validation,upload.single('perfil'),userController.newUser)
router.get("/login",validation,userController.login);
router.post('/login',validation,userController.compareUser)
router.get("/perfil", userController.perfil)
module.exports = router;