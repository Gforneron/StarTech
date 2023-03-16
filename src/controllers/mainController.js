const mainController = {};
const fs = require('fs');
const datos = fs.readFileSync('../database/datos.json','utf-8');
JSON.parse(datos);

mainController.home = (req, res) => {
  return res.render("home.ejs", { productos });
};


module.exports = mainController;
