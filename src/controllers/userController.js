const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname,'../database/users.json')
const userData = JSON.parse(fs.readFileSync(usersPath,'utf-8')) 
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator');
const userController = {};

userController.register = (req, res) => {
  return res.render("users/register");
};
userController.newUser = (req,res) => {
  let errores = validationResult(req)
  const dataUser = {
    username: req.body.username,
    password: bcryptjs.hashSync(req.body.password,8),
    email: req.body.email,
    confirmed: bcryptjs.hashSync(req.body.confirmed,8),
  }
  if (!errores.isEmpty()) {
    res.render('register',{errores: errores.mapped(),old: req.body})
  }
  let newId = userData.length + 1
  let newUser = {id: newId,...dataUser}
  userData.push(newUser)
  fs.writeFileSync(usersPath,JSON.stringify(userData),'utf-8')
  return res.redirect('/usuarios/login')
}
userController.login = (req, res) => {
  return res.render("users/login");
};
userController.compareUser = (req,res) =>{
  // desecstructuramos el objeto body
  const { username, password } = req.body;
  // buscamos que el usuario sea igual
  const user = userData.find(user => user.username === username);
  if (!user) {
    // si el usuario no existe enviamos un 401
    res.status(401).send('Usuario no encontrado');
  } else {
    // usamos bcryptjs y comparamos la contraseña con la variable
    // "user" y accedemos al valor de "password"
    bcryptjs.compare(password, user.password, function(err, result) {
      // manejamos los errores y si hay uno 
      // decimos que le envie un error en la comparacion
      if (err) {
        res.status(500).send('Error al comparar las contraseñas');
        // si esta autenticado correctamente se le dirige al home
      } else if (result) {
        res.redirect('/');
        // si no se le devuelve un error de contraseña incorrecta
      } else {
        res.send('Contraseña incorrecta');
      }
    });
  }
};
userController.perfil = (req, res) => {
  return res.render("users/perfil");
};
module.exports = userController;
