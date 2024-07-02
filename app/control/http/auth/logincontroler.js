const controller = require('./../../controller');
const passport = require('passport');


class loginControler extends controller{
    showForm(req , res) {
        res.render('login' , {messages : req.flash('errors')});
    }

    async submitForm(req , res ,next) {
        // await this.validationRecaptcha(req , res , next);
        const result = await this.validationForm(req , res , next)
        if (result) {
            this.login(req , res , next);
        } else {
            this.back(req , res)
        }
        
    }
    async login(req , res , next) {
        passport.authenticate('login-strategy' , (err , user) => {
            if (err || !user) return this.back(req , res)
            req.login(user , err => {
                if (err) console.log(err)
                // console.log(user)
                // console.log('++++++++++++++')
                // console.log(req.body)
                // if (req.body.remember) {
                //     user.setRememberToken(res)
                // }
                res.redirect('/')
            }) 
        })(req , res , next)
    }
}

module.exports = new loginControler;