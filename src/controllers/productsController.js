const productController = {};
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


productController.detalles = (req, res) => {
  const productId = req.params.id;
  const product = productos.find(product => product.id === parseInt(productId));

  if (!product) {
    return res.status(404).render('no-encontrado');
  }

  res.render('detalle-producto', { product });
};

productController.carrito = (req, res) => {
  return res.render("productCart")
}

productController.edit = (req, res) => {
  return res.render("form-edit")
}

productController.create = (req, res) => {
  return res.render("form-charge")
}

productController.listado = (req, res) => {
  return res.render("listado-producto", { productos })
}

module.exports = productController;