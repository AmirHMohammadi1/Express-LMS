class redirectAuthenticated {
    handle(req , res , next){
        if(req.signedCookies.remember_token) return res.redirect('/');
        next();
    }
}
// req.isAuthenticated() && 

module.exports = new redirectAuthenticated