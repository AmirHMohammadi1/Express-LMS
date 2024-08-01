class redirectAuthenticated {
    handle(req , res , next){
        if(req.isAuthenticated()) return res.redirect('/');
        next();
    }
}
// req.isAuthenticated() && 

module.exports = new redirectAuthenticated