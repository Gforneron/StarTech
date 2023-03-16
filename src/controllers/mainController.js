const mainController = {};
const fs = require('fs');
const datos = fs.readFileSync('../database/datos.json','utf-8');
JSON.parse(datos);

mainController.home = (req, res) => {
  return res.render("home.ejs", { productos });
};
mainController.detalles = (req, res) => {
  return res.render("detalle-producto", { productos });
};
mainController.carrito = (req, res) => {
  return res.render("productCart");
};
mainController.register = (req, res) => {
  return res.render("register");
};
mainController.login = (req, res) => {
  return res.render("login");
};
mainController.form = (req, res) => {
  return res.render("form-edit");
};
mainController.charge = (req, res) => {
  return res.render("form-charge");
};
mainController.listado = (req, res) => {
  return res.render("listado-producto", { productos });
};
module.exports = mainController;
