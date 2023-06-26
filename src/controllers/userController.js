// LLamado de modulos
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

// llamado base de datos
const db = require("../database/models");

const userController = {};

// recuperar contraseña

userController.newPassword = (req, res) => {
  res.render("users/olvidar", {
    validacion: false,
    mensaje: "Ingrese los datos de la cuenta",
  });
};

// verificacion de cambio de contraseña

userController.changePass = async (req, res) => {
  try {
    const { email, newPass, confirmed } = req.body;
    const findUser = await db.Usuario.findOne({ where: { email: email } });
    if (findUser) {
      res.render("users/olvidar", { validacion: true, mensaje: "" });
      if (newPass === confirmed) {
        const hashPass = await bcryptjs.hash(newPass, 10);
        const hashConfirm = await bcryptjs.hash(confirmed, 10);
        await db.Usuario.update(
          { password: hashPass, confirmed: hashConfirm },
          { where: { email: email } }
        );
      } else {
        res.render("users/olvidar", {
          validacion: false,
          mensaje: "las contraseñas no son iguales",
        });
      }
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
    perfil: req.file.filename,
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
        res.cookie("reminduser", req.body.username, { maxAge: 1000 * 60 * 60 });
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
  res.render("users/perfil");
};

// Retorno de perfilEdit
userController.perfilEditView = async (req, res) => {
  const user = await db.Usuario.findOne({ where: { id: req.params.id } });
  res.render("users/perfilEdit", { user });
};

userController.perfilEdit = async (req, res) => {
  try {
    const user = await db.Usuario.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    const result = await db.Usuario.update(
      { username: req.body.username, email: req.body.email },
      { where: { id: req.params.id } }
    );

    console.log(result); // Imprimir el resultado de la consulta de actualización en la consola

    return res.redirect("/usuarios/perfil");
  } catch (error) {
    console.error("Error al editar el perfil:", error);
    return res.status(500).send("Error al editar el perfil");
  }
};


// cerrado de sesion
userController.cerrar = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
module.exports = userController;
