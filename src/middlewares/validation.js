const { check,body } = require('express-validator')
const register = [
    body('username','Ingrese un nombre de usuario')
    .isLength({min: 5, max:8}).withMessage('Debe tener por lo menos 5 caracteres').bail(),
    body('password','Debe ingresar una contraseña').isLength({max:5,min:8})
    .withMessage('Este campo debe tener minimo 5 caracteres').bail()
    .isLength({min: 5,max: 8})
    .withMessage('Debe tener entre 5 y 8 caracteres').bail(),
    body('confirmed','Debe confirmar la contrasña ')
    .notEmpty().withMessage('Tienes que confirmar tu contraseña').bail(),
    body('email')
    .notEmpty().withMessage('Este campo es nesesario').bail(),
    body('perfil').notEmpty().withMessage('este campo es nesesario').bail()
]    
const login = [
    check('username').notEmpty().withMessage('Tienes que completar el nombre de usuario').bail(),
    check('password').notEmpty().withMessage('Tienes que ingresar tu contraseña').bail()
]

module.exports = register
module.exports = login