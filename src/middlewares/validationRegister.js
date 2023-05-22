const { check,body } = require('express-validator');
const register = [
    body('username','Ingrese un nombre de usuario')
    .isLength({min: 2, max:25}).withMessage('Debe tener por lo menos 2 caracteres').bail(),
    body('password','Debe ingresar una contraseña').isLength({min:8,max:25})
    .withMessage('Este campo debe tener minimo 8 caracteres').bail()
    .isLength({min: 5,max: 8})
    .withMessage('Debe tener entre 5 y 8 caracteres').bail(),
    body('confirmed','Debe confirmar la contrasña ')
    .notEmpty().withMessage('Tienes que confirmar tu contraseña').bail(),
    body('email','Ingrese su email').isEmail().notEmpty().withMessage('Este campo es nesesario').bail(),
    body('perfil').notEmpty().withMessage('este campo es nesesario').bail(),
    
];   
module.exports = register;