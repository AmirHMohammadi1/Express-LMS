const autoBind = require('auto-bind')
const recaptcha = require('express-recaptcha').RecaptchaV2;
const {validationResult} = require('express-validator');


module.exports = class controller {
    constructor() {
        autoBind(this);
        this.setRecaptcha();
    }

    // recaptcha in email a.h.mohamamdi5@gmail.com
    setRecaptcha() {
        this.recaptcha = new recaptcha('6LfDjf0pAAAAALlzPfqo6cr_jiqglqeqjoNSB3gC' , '6LfDjf0pAAAAAOn6Vw-VoKnBAHWTL4VQzpBtdq3M' , {hl : 'fa'})
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
}