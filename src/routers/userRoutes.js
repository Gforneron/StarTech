// Llamada de modulos
const express = require("express");
const router = express.Router();
const multer = require("multer");

// Llamada de middlewares
const validation = require("../middlewares/validation.js");
const sessionMiddleware = require("../middlewares/sessionMiddleware");
const autenticacionMiddleware = require("../middlewares/autenticacionMiddleware");

// llamada del controller
const userController = require("../controllers/userController.js");

//
router.use(express.urlencoded({ extended: false }));

// Implentacion de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/usuarios");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});
const upload = multer({ storage: storage });

// recuperar contraseña
router.get("/newPassword", userController.newPassword);

// verificacion de cambio de contraseña
router.post("/passVerify", userController.changePass);

// retorno formulario register
router.get("/register", sessionMiddleware, userController.register);

// formulario register
router.post(
  "/register",
  upload.single("perfil"),
  userController.newUser
);


// retorno formulario login
router.get("/login", sessionMiddleware, validation, userController.login);

// formulario login
router.post("/login", validation, userController.compareUser);

//  retorno perfil
router.get("/perfil", autenticacionMiddleware, userController.perfil);

// retorno de perfil edit
router.get('/editar-perfil/:id',autenticacionMiddleware,userController.perfilEditView);

// post del perfil edit
router.post('/perfilEdit/:id',userController.perfilEdit)

// cerrado de sesion
router.get("/cerrar", userController.cerrar);

module.exports = router;