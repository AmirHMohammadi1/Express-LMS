const {check} = require('express-validator');


class loginValidator {
    handle() {
        return[
            check('logemail')
                .isEmail()
                .withMessage('222ایمیل به درستی وارد نشده است!'),
            check('password')
                .isLength({min : 5})
                .withMessage('رمز عبور باید بیشتر از 5 کاراکتر باشد.')
        ]
    }
}

module.exports = new loginValidator();