const path = require('path');

const mainController = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, "../src/views/home.ejs"));
    },
    detalles: (req, res) => {
        res.render(path.resolve(__dirname, "../src/views/detalle-producto.ejs"));
    },
    carrito: (req, res) => {
        res.render(path.resolve(__dirname, "../src/views/productCart.ejs"));
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, "../src/views/register.ejs"));
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, "../src/views/login.ejs"));
    },
};
module.exports = mainController;