const { check,body } = require('express-validator');
const login = [
    check('username').notEmpty().withMessage('Tienes que completar el nombre de usuario').bail(),
    check('password').notEmpty().withMessage('Tienes que ingresar tu contraseña').bail()
];
module.exports = login;