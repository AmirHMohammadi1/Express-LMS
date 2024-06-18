class loginControler{
    showForm(req , res) {
        res.render('login');
    }
}

module.exports = new loginControler;