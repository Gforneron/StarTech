const userController = {};

userController.register = (req, res) => {
  return res.render("users/register");
};
userController.login = (req, res) => {
  return res.render("users/login");
};
userController.perfil = (req, res) => {
  return res.render("users/perfil");
};
module.exports = userController;
