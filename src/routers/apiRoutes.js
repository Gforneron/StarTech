const express = require('express');
const router = express.Router();
const apiUserController = require('../controllers/apiUserController.js')
const apiProductsController = require('../controllers/apiProductsController.js')


router.get('/usuarios',apiUserController.list)
router.get('/usuarios/:id',apiUserController.search)
router.get('/imagen/:id',apiUserController.verImagen)
// api productos
router.get('/productos',apiProductsController.list)
router.get('/productos/:id',apiProductsController.search)
//router.get('/productos',apiProductsController.create)
//router.get('/productos/:id',apiProductsController.delete)
module.exports = router