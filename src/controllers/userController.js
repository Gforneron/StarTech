const userController = {};

userController.register = (req, res) => {
  return res.render("users/register");
};
userController.login = (req, res) => {
  return res.render("users/login");
};

module.exports = userController;
