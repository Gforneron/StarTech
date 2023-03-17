const mainController = {};
const fs = require('fs');
const productos = fs.readFileSync('../database/datos.json','utf-8');
JSON.parse(productos);

mainController.home = (req, res) => {
  return res.render("home.ejs", { productos });
};


module.exports = mainController;
