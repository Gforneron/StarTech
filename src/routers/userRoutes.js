const express = require("express");
const router = express.Router();
const validation = require('../middlewares/validation.js')
const userController = require("../controllers/userController.js");
const multer = require('multer')
router.use(express.urlencoded({ extended: false }));
const sessionMiddleware = require("../middlewares/sessionMiddleware")
const autenticacionMiddleware = require("../middlewares/autenticacionMiddleware")
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
router.get('/newPassword',userController.newPassword)
router.post('/passVerify',userController.changePass)
router.get("/register",sessionMiddleware , userController.register);
router.post('/register',validation,upload.single('perfil'),userController.newUser)
router.get("/login",sessionMiddleware, validation,userController.login);
router.post('/login',validation,userController.compareUser)
router.get("/perfil",autenticacionMiddleware, userController.perfil)
router.get("/cerrar", userController.cerrar)
module.exports = router;