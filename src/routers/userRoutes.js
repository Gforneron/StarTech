const express = require("express");
const router = express.Router();
const validation = require('../middlewares/validation.js')
const userController = require("../controllers/userController.js");
router.use(express.urlencoded({ extended: false }));

router.get("/register",userController.register);
router.post('/register',validation,userController.newUser)
router.get("/login",validation,userController.login);
router.post('/login',validation,userController.compareUser)
router.get("/perfil", userController.perfil)
module.exports = router;