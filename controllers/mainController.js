const path = require('path');

const mainController = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../src/views/home.html"));
    },
    detalles: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../src/views/detalle-producto.html"));
    },
    carrito: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../src/views/productCart.html"));
    },
    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../src/views/register.html"));
    },
    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../src/views/login.html"));
    },
};
module.exports = mainController;