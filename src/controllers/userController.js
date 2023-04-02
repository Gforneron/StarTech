const userController = {};

userController.register = (req, res) => {
  return res.render("register");
};
userController.login = (req, res) => {
  return res.render("login");
};
userController.perfil = (req, res) => {
  return res.render("perfil");
};
module.exports = userController;
