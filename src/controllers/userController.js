// LLamado de modulos
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");

// llamado base de datos
const usersPath = path.join(__dirname, "../database/users.json");
const userData = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

const userController = {};

// recuperar contraseña
userController.newPassword = (req, res) => {
  return res.render("users/olvidar", {
    userData,
    req,
    validacion: false,
    mensaje: "Ingrese los datos de la cuenta",
  });
};

// verificacion de cambio de contraseña

userController.changePass = (req, res) => {
  const { email, password } = req.body;
  const findUser = userData.find((user) => user.email === email);
  if (findUser) {
    findUser.password = password;
    fs.writeFileSync(usersPath, JSON.stringify(userData), "utf-8");
    res.render("users/olvidar", { validacion: true, mensaje: null });
  } else {
    res.render("users/olvidar", {
      validacion: false,
      mensaje: "el correo ingresado no esta registrado",
    });
  }

  return res.redirect("/usuarios/login");
};

// retorno formulario register

userController.register = (req, res) => {
  let errores = validationResult(req);
  if (!errores.isEmpty()) {
    res.render("register", { errores: errores.mapped(), old: req.body });
  }
  return res.render("users/register", { errores });
};

// formulario register

userController.newUser = async (req, res) => {
  let errores = validationResult(req);
  const dataUser = {
    username: req.body.username,
    password: bcryptjs.hashSync(req.body.password, 8),
    email: req.body.email,
    perfil: req.file.filename,
    confirmed: bcryptjs.hashSync(req.body.confirmed, 8),
  };
  if (!errores.isEmpty()) {
    await db.Usuario.create(dataUser);
    return res.redirect("/usuarios/register");
  }
  res.render("users/register", { errores: errores.mapped(), old: req.body });

};
// retorno formulario login

userController.login = (req, res) => {
  return res.render("users/login");
};

// formulario login

userController.compareUser = (req, res) => {
  // desecstructuramos el objeto body
  const { username, password } = req.body;
  // buscamos que el usuario sea igual
  const user = userData.find((user) => user.username === username);
  if (!user) {
    // si el usuario no existe enviamos un 401
    res.status(401).send("Usuario no encontrado");
  } else {
    // usamos bcryptjs y comparamos la contraseña con la variable
    // "user" y accedemos al valor de "password"
    bcryptjs.compare(password, user.password, function (err, result) {
      // manejamos los errores y si hay uno
      // decimos que le envie un error en la comparacion
      if (err) {
        res.status(500).send("Error al comparar las contraseñas");
        // si esta autenticado correctamente se le dirige al home
      } else if (result) {
        //pero antes, si es que el usuario lo desea
        //dejaremos una cookie con el usuario guardado
        if (req.body.remind) {
          res.cookie("reminduser", req.body.username, { maxAge: 1000 * 60 });
        }
        //Guardamos el usuario logueado
        req.session.usuarioLogueado = user;

        //ahora si lo dirigimos a home
        res.redirect("/usuarios/perfil");
        // si no, se le devuelve un error de contraseña incorrecta
      } else {
        res.send("Contraseña incorrecta");
      }
    });
  }
};

//  retorno perfil

userController.perfil = (req, res) => {
  usuario = req.session.usuarioLogueado;
  return res.render("users/perfil", { usuario });
};

// cerrado de sesion

userController.cerrar = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
module.exports = userController;
