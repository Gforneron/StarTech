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
  db.Usuario.findByPk()
  .then(function () {    
      res.render('users/olvidar',{userData,req,validacion: false,mensaje: "Ingrese los datos de la cuenta",})
    }).catch(function (err) {
      console.log(err);
    })
};

// verificacion de cambio de contraseña

userController.changePass = (req, res) => {
  
  const { email, password } = req.body;
  const findUser = userData.find((user) => user.email === email);
  if (findUser) {
    findUser.password = password;
    fs.writeFileSync(usersPath, JSON.stringify(userData), "utf-8");
  } else {
      res.redirect('users/olvidar',{validacion: false,mensaje: "el correo ingresado no esta registrado",})
  }

  return res.redirect("/usuarios/login");
};

// retorno formulario register

userController.register = (req, res) => {
  res.render('users/register')
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
    res.render('users/register',{errors: errores.array(),old:req.body}) 
  }
};
// retorno formulario login

userController.login = (req, res) => {
  db.Usuario.findAll()
  .then(function () {
    res.render('users/login')
  }).catch((err) => {
    console.log(err);
  })
};

// formulario login

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
  db.Usuario.findAll()
  .then(function () {
    res.render('users/perfil')
  })
};
userController.perfilEditView = (req,res) => {
  db.Usuario.findAll()
  .then(() => {
    res.render('users/perfilEdit')
  })
}
userController.perfilEdit = (req,res) => {
  const userID = req.params.id;
  const user = userData.find(user => user.id === parseInt(userID));
  if (!product) {
  }
  user.username = req.body.username
  user.email = req.body.email
  user.perfil = req.file.filname
  fs.writeFileSync(usersPath,JSON.stringify(userData,null,2),'utf-8')
  return res.redirect('/usuarios/perfil')
}
// cerrado de sesion

userController.cerrar = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
module.exports = userController;
