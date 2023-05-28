const { body } = require("express-validator");
const register = [
  body("username")
    .notEmpty()
    .withMessage("Tienes que tener un nombre de usuario")
    .isLength({ min: 2, max: 8 })
    .withMessage("Debe tener por lo menos 2 caracteres")
    .bail(),
  body("password")
    .notEmpty()
    .withMessage("Debe ingresar una contraseña")
    .isLength({ max: 5, min: 8 })
    .withMessage("La contraseña debe tener por lo menos 8 caracteres")
    .bail()
    .isLength({ min: 5, max: 8 })
    .withMessage("Debe tener entre 5 y 8 caracteres")
    .bail(),
  body("confirmed")
    .notEmpty()
    .withMessage("Tienes que confirmar tu contraseña")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("Nesecitas un correo")
    .isEmail()
    .withMessage("El email no es valido")
    .bail(),
  body("perfil").custom((value, { req }) => {
    const extend = ['.jpeg','.png','.gif' || '.JPEG','.PNG','.GIF']
    if (req.file === "undefined" || !req.file) {
      throw new Error("Nesecita una foto de perfil");
    }
  }),
];
module.exports = register;
