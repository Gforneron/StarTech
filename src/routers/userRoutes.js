// Llamada de modulos
const express = require("express");
const router = express.Router();
const multer = require("multer");

// Llamada de middlewares
const validationRegister = require("../middlewares/validationRegister.js");
const validationLogin = require("../middlewares/validationLogin.js");
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
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExtension = getFileExtension(file.originalname);

    if (allowedExtensions.includes(fileExtension.toLowerCase())) {
      cb(null, true); 
    } else {
      cb(new Error('Formato de archivo no válido.')); 
    }
  }
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
  validationRegister,
  upload.single("perfil"),
  userController.newUser
);

// retorno formulario login
router.get("/login", sessionMiddleware, userController.login);

// formulario login
router.post(
  "/login", 
  validationLogin, 
  userController.compareUser
);

//  retorno perfil
router.get("/perfil", autenticacionMiddleware, userController.perfil);

// cerrado de sesion
router.get("/cerrar", userController.cerrar);

module.exports = router;
