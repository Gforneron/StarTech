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
  res.render("users/olvidar", {
    userData,
    req,
    validacion: false,
    mensaje: "Ingrese los datos de la cuenta",
  });
};

// verificacion de cambio de contraseña

userController.changePass = async (req, res) => {
  try {
    const { email, newPass, password } = req.body;
    const findUser = await db.Usuario.findOne({ where: { email: email } });
    if (findUser) {
      await db.Usuario.update(
        { password: newPass },
        { where: {email: email} }
      );
      
      res.render("users/olvidar", { validacion: true, mensaje: ""});
    } else {
      res.render("users/olvidar", {
        validacion: false,
        mensaje: "el correo ingresado no esta registrado",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// retorno formulario register

userController.register = (req, res) => {
  res.render("users/register");
};

// formulario register

userController.newUser = async (req, res) => {
  let errores = validationResult(req);
  const dataUser = {
    username: req.body.username,
    password: bcryptjs.hashSync(req.body.password, 8),
    email: req.body.email,
    confirmed: bcryptjs.hashSync(req.body.confirmed, 8),
  };
  if (errores.isEmpty()) {
    await db.Usuario.create(dataUser);
    return res.redirect("/usuarios/login");
  } else {
    res.render("users/register", { errors: errores.array(), old: req.body });
  }
};
// retorno formulario login

userController.login = (req, res) => {
  res.render("users/login");
};

// formulario login

userController.login = (req, res) => {
  return res.render("users/login");
};

// formulario login

userController.compareUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Busca el usuario en la base de datos por nombre de usuario
    const user = await db.Usuario.findOne({ where: { username } });

    if (!user) {
      return res.status(401).send("Usuario no encontrado");
    }

    const match = await bcryptjs.compare(password, user.password);

    if (match) {
      if (req.body.remind) {
        res.cookie("reminduser", req.body.username, { maxAge: 1000 * 60 });
      }

      req.session.usuarioLogueado = user;

      return res.redirect("/usuarios/perfil");
    } else {
      return res.send("Contraseña incorrecta");
    }
  } catch (error) {
    console.error("Error al comparar las contraseñas:", error);
    return res.status(500).send("Error al comparar las contraseñas");
  }
};
//  retorno perfil

userController.perfil = (req, res) => {
  usuario = req.session.usuarioLogueado;
  db.Usuario.findAll().then(function () {
    res.render("users/perfil");
  });
};
userController.perfilEditView = (req, res) => {
  db.Usuario.findAll().then(() => {
    res.render("users/perfilEdit");
  });
};
userController.perfilEdit = (req, res) => {
  const userID = req.params.id;
  const user = userData.find((user) => user.id === parseInt(userID));
  if (!product) {
  }
  user.username = req.body.username;
  user.email = req.body.email;
  user.perfil = req.file.filname;
  fs.writeFileSync(usersPath, JSON.stringify(userData, null, 2), "utf-8");
  return res.redirect("/usuarios/perfil");
};
// cerrado de sesion

userController.cerrar = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
module.exports = userController;
