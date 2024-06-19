const userModel = require('./../../../model/auth/users');
const {validationResult} = require('express-validator');
class registerControler {
    showForm(req , res) {
        res.render('register' , {messages : req.flash('errors')});
    };

    submitForm(req , res) {
        // console.log(req.body);
        const result = validationResult(req);
        if (!result.isEmpty()) {
            // console.log(result.array());
            const errors = result.array();
            const message = [];
            errors.forEach(err => message.push(err.msg));
            // console.log(message);
            req.flash('errors' , message);
            // console.log(req.flash('errors'));
            res.redirect('/register');
        } else {
            const addUser = new userModel({
                name : req.body.regName,
                email : req.body.regEmail,
                password : req.body.regPassword
            });
            addUser.save();
            res.redirect('/');
        }
    }

}

module.exports = new registerControler;