const controller = require('../../controller');
const userModel = require('../../../model/auth/users');
const resetPassModel = require('../../../model/auth/forget-pass');
const unicString = require('unique-string');


class forgetPassControler extends controller{

    showForm(req , res) {
        res.render('forget-password' , {messages : req.flash('errors') , success : req.flash('success')});
    }

    async submitForm(req , res ,next) {
        // await this.validationRecaptcha(req , res , next);
        const result = await this.validationForm(req , res , next)
        if (result) {
            this.forgetPassProcess(req , res , next);
        } else {
            return this.back(req , res)
        }
        
    }
    async forgetPassProcess(req , res , next) {
        const user = await userModel.findOne({email : req.body.forgetPassEmail});
        if (!user) {
            req.flash('errors' , 'کاربری با این مشخصات در سایت پیدا نشد.')
            return this.back(req , res) 
        }

        const setPass = new resetPassModel({
            email : req.body.forgetPassEmail,
            token : unicString()
        })

        await setPass.save().then( (set , err) => {
            if(err) console.log(err)
            req.flash('success' , 'لینک تغییر رمز عبور برای ایمیل وارد شده ارسال شد.')
            return this.back(req , res)
        })

    }
}

module.exports = new forgetPassControler;