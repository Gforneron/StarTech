const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname,'../database/users.json')
const userData = JSON.parse(fs.readFileSync(usersPath,'utf-8')) 
const { check, validationResult,body } = require('express-validator')
const validation = [
    check('username')
    .notEmpty()
    .withMessage('Tiene que completar este campo').bail(),
    check('email')
    .notEmpty()
    .isEmail()
    .withMessage('Email NO valido').bail(),
]    


module.exports = validation