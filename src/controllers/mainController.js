const path = require('path');

const mainController = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, "../views/home.ejs"));
    },
    detalles: (req, res) => {
        res.render(path.resolve(__dirname, "../views/detalle-producto.ejs"));
    },
    carrito: (req, res) => {
        res.render(path.resolve(__dirname, "../views/productCart.ejs"));
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, "../views/register.ejs"));
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, "../views/login.ejs"));
    },
    form: (req,res) => {
        res.render(path.resolve(__dirname,"../views/form-edit.ejs"));
    }
};
module.exports = mainController;