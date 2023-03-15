const express = require("express");
const router = express.Router();
const mainController = require("../controllers/productsController");


router.get("/detalles/:id", mainController.detalles);
router.get("/carrito", mainController.carrito);
router.get("/form-edit", mainController.form);
router.get("/form-charge", mainController.charge);
router.get("/listado", mainController.listado);

module.exports = router;