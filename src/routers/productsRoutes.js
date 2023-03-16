const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController.js");


// Detalle de un producto particular
router.get("/detalle/:id", productController.detalles);

// Carito de productos
router.get("/carrito", productController.carrito);

// Formulario de edición de productos
router.get("/:id/edit", productController.edit);

// Formulario de creación de productos
router.get("/create", productController.create);

// Listado de productos
router.get("/listado", productController.listado);

// Acción de edición (a donde se envía el formulario)

    // Falta hacer el controller pa
// router.put("/products/:id", productController.editAction);

// Acción de borrado

    // Falta hacer el controller pa
// router.delete("/products/:id", productController.delete);

// Acción de creación (a donde se envía el formulario)
    // Falta hacer el controller pa
// router.post("/products", productController.create);

module.exports = router;