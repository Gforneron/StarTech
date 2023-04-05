const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname,'../database/users.json')
const userData = JSON.parse(fs.readFileSync(usersPath,'utf-8')) 
const { check, validationResult,body } = require('express-validator')
const validation = (req,res) => {
    const dataUser = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        confirmed: req.body.confirmed
    }
    let newId = usersPath.length + 1
    let newUser = {id: newId,...dataUser}
    userData.push(newUser)
    fs.writeFileSync(usersPath,JSON.stringify(userData),'utf-8')
    
    let errors = validationResult(req) 
    return errors.isEmpty() ?? res.render('register',{errors: errors.mapped(),old: req.body}) 
}

module.exports = validation