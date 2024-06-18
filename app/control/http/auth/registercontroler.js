const userModel = require('./../../../model/auth/users')
class registerControler {
    showForm(req , res) {
        res.render('register');
    }

    submitForm(req , res) {
        // console.log(req.body);
        const addUser = new userModel({
            name : req.body.regName,
            email : req.body.regEmail,
            password : req.body.regPassword
        })

        addUser.save();
    }

}

module.exports = new registerControler;