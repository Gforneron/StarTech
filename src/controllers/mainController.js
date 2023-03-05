const path = require('path');

const mainController = {};

mainController.home = (req, res) => {
        return res.render("home");
    }
mainController.detalles = (req, res) => {
        return res.render("detalle-producto");
    }
mainController.carrito = (req, res) => {
        return res.render("productCart");
    }
mainController.register = (req, res) => {
        return res.render ("register");
    }
mainController.login = (req, res) => {
        return res.render ("login");
    }
mainController.form = (req,res) => {
        return res.render("form-edit")
    }
module.exports = mainController;