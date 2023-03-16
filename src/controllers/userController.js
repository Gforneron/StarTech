const userController = {};

userController.register = (req, res) => {
  return res.render("register");
};
userController.login = (req, res) => {
  return res.render("login");
};

module.exports = userController;
