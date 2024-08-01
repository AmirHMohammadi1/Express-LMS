class homeControler {
    index(req , res) {
        res.render('web/index');
    }
}
module.exports = new homeControler;