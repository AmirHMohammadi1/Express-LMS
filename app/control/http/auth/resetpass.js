const controller = require('./../../controller')
const passReset = require('./../../../model/auth/forget-pass')
const User = require('./../../../model/auth/users')


class resetPassControler extends controller {
    showForm(req , res) {
        // console.log(req.path)
        res.render('resetpassword' , {messages : req.flash('errors') , success : req.flash('success')});
    }

    async submitForm(req , res , next) {
        // console.log(req)

        // await this.validationRecaptcha(req , res , next);
        const result = await this.validationForm(req , res , next)
        if(result) {
            if (req.body.resetpass != req.body.resetpassrepeat) {
                req.flash('errors' , 'تکرار رمز عبور صحیح نیست!')
                return this.back(req , res)
            }
            this.resetPassProcess(req , res , next)
        }else {
            return this.back(req , res)
        }
    }

    async resetPassProcess(req , res , next){
        console.log(req)
        const pathToken = req.rawHeaders[19]
        const charDot = pathToken.lastIndexOf(':')
        const urlToken = pathToken.slice(charDot+1)
        // console.log(urlToken)
        const passwordReset = await passReset.findOne({$and : [{email : req.body.resetemail} , {token : urlToken}]})
        // console.log(passwordReset)
        if(!passwordReset) {
            req.flash('errors' , 'لینک وارد شده یا ایمیل صحیح نیست. در صورت اطمینان از صحت لینک با ادمین سایت تماس بگیرید')
            return this.back(req , res)
        }

        if (passwordReset.use) {
            req.flash('errors' , 'این لینک قبلا استفاده شده است')
            return this.back(req , res)
        }

        const user = await User.findOneAndUpdate({email : req.body.resetemail} , {$set : {password : req.body.resetpass}})
        if(!user){
            req.flash('errors' , 'کاربری با این مشخصات پیدا نشد')
            return this.back(req , res)
        }

        await passwordReset.updateOne({use : true}).then((ok , err) => console.log(err))
        return res.redirect('/login')
    }

}


module.exports = new resetPassControler;