const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

router.get("/", mainController.home);
router.get("/detalles/:id", mainController.detalles);
router.get("/carrito", mainController.carrito);
router.get("/register", mainController.register);
router.get("/login", mainController.login);
router.get("/form-edit", mainController.form);
router.get("/form-charge", mainController.charge);
router.get("/listado", mainController.listado);
module.exports = router;