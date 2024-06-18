class homeControler {
    index(req , res) {
        res.render('index');
    }
}
module.exports = new homeControler;