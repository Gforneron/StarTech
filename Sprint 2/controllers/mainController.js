const path = require('path');

const mainController = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/home.html"));
    },
    detalles: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/detalle-producto.html"));
    },
    carrito: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/productCart.html"));
    },
    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/register.html"));
    },
    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/login.html"));
    },
};
module.exports = mainController;