const {check} = require('express-validator');

class registerValidator {
    handle() {
        return[
            check('regname')
                .isLength({min : 3})
                .withMessage('نام کاربری باید بیشتر از 3 حرف باشد.'),
            check('regemail')
                .isEmail()
                .withMessage('ایمیل به درستی وارد نشده است!'),
            check('password')
                .isLength({min : 5})
                .withMessage('رمز عبور باید بیشتر از 5 کاراکتر باشد.')
        ]
    }
}

module.exports = new registerValidator();