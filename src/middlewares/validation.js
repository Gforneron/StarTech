const { check } = require('express-validator')
const register = [
    check('username')
    .notEmpty().withMessage('Debes completar este campo').bail()
    .isLength({min: 5,max: 8}).withMessage('El nombre debe tener por lo menos 5 caracteres').bail(),
    check('password').notEmpty().withMessage('Este campo no puede estar vacio').bail()
    .isLength({min: 5,max: 8})
    .withMessage('Debe tener entre 5 y 8 caracteres').bail(),
    check('confirmed')
    .notEmpty().withMessage('Tienes que confirmar tu contraseña').bail()
]    
const login = [
    check('username').notEmpty().withMessage('Tienes que completar el nombre de usuario').bail(),
    check('password').notEmpty().withMessage('Tienes que ingresar tu contraseña').bail()
]

module.exports = register
module.exports = login