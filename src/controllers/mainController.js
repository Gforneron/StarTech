const mainController = {};
const db = require("../database/models");

// Retorna la vista de pag principal y sus productos
mainController.home = async (req, res) => {
  const productos = await db.Producto.findAll();
  return res.render("main/home.ejs", { productos });
};

module.exports = mainController;
