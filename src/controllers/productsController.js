const productController = {};
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


productController.detalles = (req, res) => {
  const productId = req.params.id;
  const product = productos.find(product => product.id === parseInt(productId));

  if (!product) {
    return res.status(404).render('main/no-encontrado');
  }

  res.render('products/detalle-producto', { product });
};

productController.carrito = (req, res) => {
  return res.render("main/productCart")
}

productController.edit = (req, res) => {
  return res.render("products/form-edit")
}

productController.create = (req, res) => {
  return res.render("products/form-charge")
}

productController.listado = (req, res) => {
  return res.render("products/listado-producto", { productos })
}

productController.newProduct = (req, res) => {
  // con el req.body podemos tener los datos del fomrulario
  return res.redirect("/productos/create");
}

module.exports = productController;