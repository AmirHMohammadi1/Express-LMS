const userModel = require('./../../../model/auth/users');
const {validationResult} = require('express-validator');
const controller = require('./../../controller');
const passport = require('passport');
const recaptcha = require('express-recaptcha').RecaptchaV2;

class registerControler extends controller {
    showForm(req , res) {
        res.render('register' , {messages : req.flash('errors') , recaptcha : this.recaptcha.render()});
    };

    submitForm(req , res ,next) {
        // console.log(req.body);

        this.validationRecaptcha(req , res , next)
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
                    console.log('error 1');
                    this.register(req , res , next);
                }
            }
        })
    }
// todo: با تغییر نام فیلد ها به reg دوباره چک شود که ایراد از کجا بوده
    register(req , res , next) {
        console.log('error 2');
        passport.authenticate('local-strategy' , {
            successRedirect : '/',
            failureRedirect : 'register',
            failureFlash : true
        })(req , res , next)
    }


}

module.exports = new registerControler;