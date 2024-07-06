class redirectAuthenticated {
    handle(req , res , next){
        if(req.isAuthenticated() && req.signedCookies.remember_token) return res.redirect('/');
        next();
    }
}

module.exports = new redirectAuthenticated