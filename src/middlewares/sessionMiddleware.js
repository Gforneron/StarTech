function sessionMiddleware(req, res, next) {
    if(req.session.usuarioLogueado){
        return res.redirect('/usuarios/perfil')
    }
    next()
}

module.exports = sessionMiddleware