const autoBind = require('auto-bind')
const recaptcha = require('express-recaptcha').RecaptchaV2;
const {validationResult} = require('express-validator');
const config = require('./../configs')


module.exports = class controller {
    constructor() {
        autoBind(this);
        this.setRecaptcha();
    }

    // recaptcha in email a.h.mohamamdi5@gmail.com
    setRecaptcha() {
        this.recaptcha = new recaptcha(config.services.Recaptcha.SITE_KEY , config.services.Recaptcha.SECRET_KEY , {hl : config.services.Recaptcha.OPTION})
    }

    validationRecaptcha(req , res) {
        return new Promise((resolve, reject) => {
            this.recaptcha.verify(req , (err) => {
                if (err) {
                    req.flash('errors' , 'کلید امنیتی به درستی وارد نشده است.');
                    res.redirect('/register');
                } else {
                    resolve(true);
                }
            })
        })
    }

    async validationForm(req , res) {
        const result = validationResult(req)
        if (!result.isEmpty()) {
            const errors = result.array();
            const message = [];
            errors.forEach(err => message.push(err.msg));
            req.flash('errors' , message);
            return false;
        } else {
            return true;
        }
    }
    // ? for return to this url or home url
    back (req , res) {
        res.redirect(req.header('referer') || '/')
    }
}