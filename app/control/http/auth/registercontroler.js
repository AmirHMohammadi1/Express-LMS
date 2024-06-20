const userModel = require('./../../../model/auth/users');
const {validationResult} = require('express-validator');
const controller = require('./../../controller');
const recaptcha = require('express-recaptcha').RecaptchaV2;

class registerControler extends controller {
    showForm(req , res) {
        res.render('register' , {messages : req.flash('errors') , recaptcha : this.recaptcha.render()});
    };

    submitForm(req , res) {
        // console.log(req.body);

        this.validationRecaptcha(req , res)
        .then(result => validationResult(req))
        .then(result => {
            if (result) {
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
        })

        // const result = validationResult(req);
        // if (!result.isEmpty()) {
        //     // console.log(result.array());
        //     const errors = result.array();
        //     const message = [];
        //     errors.forEach(err => message.push(err.msg));
        //     // console.log(message);
        //     req.flash('errors' , message);
        //     // console.log(req.flash('errors'));
        //     res.redirect('/register');
        // } else {
        //     const addUser = new userModel({
        //         name : req.body.regName,
        //         email : req.body.regEmail,
        //         password : req.body.regPassword
        //     });
        //     addUser.save();
        //     res.redirect('/');
        // }
    }

}

module.exports = new registerControler;