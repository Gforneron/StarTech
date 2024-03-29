// Llamada de modulos
const express = require("express");
const router = express.Router();
const multer = require('multer');

//Llamado de middlewares
const autenticacionMiddleware = require("../middlewares/autenticacionMiddleware");
const validationCreateProduct = require("../middlewares/validationCreateProduct");

const productController = require("../controllers/productsController.js");
router.use(express.urlencoded({ extended: false }));

// Inplementacion de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/productos')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})
const upload = multer({storage: storage})

// Detalle de un producto particular
router.get("/detalle/:id", productController.detalles);

// Carito de productos
router.get("/carrito", autenticacionMiddleware, productController.carrito);

// Formulario de edición de productos
router.get("/:id/edit", productController.edit);
router.put("/:id/edit", upload.single('imagen'),productController.editar);

// formulario de eliminación de productos
router.get("/delete/:id",productController.delete)

// Formulario de creación de productos
router.get("/create", productController.create);

// Listado de productos
router.get("/listado", autenticacionMiddleware, productController.listado);

router.post("/create", upload.single('imagen'),productController.newProduct);

module.exports = router;