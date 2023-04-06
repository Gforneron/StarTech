const express = require("express");
const router = express.Router();
const validation = require('../middlewares/validation.js')
const userController = require("../controllers/userController.js");
router.use(express.urlencoded({ extended: false }));

router.get("/register",userController.register);
router.post('/register',userController.newUser)
router.get("/login",userController.login);
router.post('/login',userController.compareUser)
router.get("/perfil", userController.perfil)
module.exports = router;