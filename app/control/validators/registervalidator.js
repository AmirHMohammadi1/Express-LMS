const {check} = require('express-validator');

class registerValidator {
    handle() {
        return[
            check('regName')
                .isLength({min : 3})
                .withMessage('نام کاربری باید بیشتر از 3 حرف باشد.'),
            check('regEmail')
                .isEmail()
                .withMessage('ایمیل به درستی وارد نشده است!'),
            check('regPassword')
                .isLength({min : 5})
                .withMessage('رمز عبور باید بیشتر از 5 کاراکتر باشد.')
        ]
    }
}

module.exports = new registerValidator();