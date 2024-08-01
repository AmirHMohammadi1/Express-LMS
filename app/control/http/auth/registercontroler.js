const controller = require('./../../controller');
const passport = require('passport');
// const recaptcha = require('express-recaptcha').RecaptchaV2;
// , recaptcha : this.recaptcha.render()

class registerControler extends controller {
    showForm(req , res) {
        res.render('web/register' , {messages : req.flash('errors')});
    };

    async submitForm(req , res ,next) {
        // await this.validationRecaptcha(req , res , next);
        const result = await this.validationForm(req , res)
        if (result) {
            this.register(req , res , next);
        } else {
            res.redirect('register');
        }
        
    }
    register(req , res , next) {
        passport.authenticate('local-strategy' , {
            successRedirect : '/',
            failureRedirect : 'register',
            failureFlash : true
        })(req , res , next)
    }


}

module.exports = new registerControler;