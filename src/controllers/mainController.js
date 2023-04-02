const mainController = {};
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Retorna la vista de pag principal y sus productos
mainController.home = (req, res) => {
  return res.render("main/home.ejs", { productos });
};


module.exports = mainController;