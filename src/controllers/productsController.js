const productController = {};
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/productos.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

productController.detalles = (req, res) => {
  const productId = req.params.id;
  const product = productos.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return res.status(404).render("main/no-encontrado");
  }

  res.render("products/detalle-producto", { product });
};

productController.carrito = (req, res) => {
  return res.render("main/productCart");
};

productController.edit = (req, res) => {
  const productId = req.params.id;
  const product = productos.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return res.status(404).render("main/no-encontrado");
  }
  return res.render("products/form-edit", { product });
};

productController.create = (req, res) => {
  return res.render("products/form-charge");
};

productController.listado = (req, res) => {
  return res.render("products/listado-producto", { productos });
};

productController.newProduct = (req, res) => {
  // con el req.body podemos tener los datos del fomrulario
  return res.redirect("/productos/create");
};

productController.editar = (req, res) => {
  const productId = req.params.id;
  const product = productos.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return res.status(404).render("main/no-encontrado");
  }

  // Actualizar los datos del producto con los datos del formulario
  product.nombre = req.body.nombre;
  product.descuento = req.body.descuento;
  product.clase = req.body.clase;
  product.precio = req.body.precio;

  // Guardar los cambios en el archivo JSON
  fs.writeFileSync(
    productsFilePath,
    JSON.stringify(productos, null, 2),
    "utf-8"
  );

  // Redireccionar a la página de detalles del producto actualizado
  return res.redirect('/productos/listado');
};
module.exports = productController;
