const express = require("express");
const router = express.Router();
const mainController = require("../controllers/userController.js");

router.get("/register", mainController.register);
router.get("/login", mainController.login);

module.exports = router;