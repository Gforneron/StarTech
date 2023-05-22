const { check,body } = require('express-validator');
const createProduct = [
    body('nombre').notEmpty().withMessage('Debe ingresar un nombre').isLength({ min: 2, max: 50 }).bail(),
    body('descuento').notEmpty().withMessage('Debe ingresar un descuento').bail(),
    body('clase').notEmpty().withMessage('Debe seleccionar una categoría').bail(),
    body('precio').notEmpty().withMessage('Debe ingresar un precio').bail()
];
module.exports = createProduct;