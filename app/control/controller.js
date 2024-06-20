const autoBind = require('auto-bind')
const recaptcha = require('express-recaptcha').RecaptchaV2;

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
}