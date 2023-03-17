const productController = {};
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


productController.detalles = (req, res) => {
  return res.render("detalle-producto", { productos })
}

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