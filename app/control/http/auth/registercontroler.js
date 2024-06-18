class registerControler {
    showForm(req , res) {
        res.render('register');
    }

    submitForm(req , res) {
        res.json(req.body)
    }
}

module.exports = new registerControler;