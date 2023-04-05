const express = require("express");
const router = express.Router();
const validation = require('../middlewares/validation.js')
const userController = require("../controllers/userController.js");
router.use(express.urlencoded({ extended: false }));

router.get("/register",validation,userController.register);
router.get("/login",userController.login);
router.get("/perfil", userController.perfil)
module.exports = router;