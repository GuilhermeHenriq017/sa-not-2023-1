

// verifica se existe usuário autenticado
function checkAuth(req, res, next) {

    //se o usuário estiver logado, passa ao próximo middleware
    if(req.session.isLoggedIn) next()

    //guarda a url original e redireciona para o login
    else{
        req.session.redirectUrl = req.url 
        res.redirect('/users/login')
    
    }
}
module.exports = {checkAuth}
