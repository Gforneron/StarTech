const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.home)
router.get('/detalles', mainController.detalles)
router.get('/carrito', mainController.carrito)
router.get('/register', mainController.register)
router.get('/login', mainController.login)
router.get('/form-edit',mainController.form)
module.exports = router;