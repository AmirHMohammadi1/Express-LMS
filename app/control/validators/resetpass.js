const {check} = require('express-validator');


class resetPassValidator {
    handle() {
        return[
            check('resetemail')
                .isEmail()
                .withMessage('ایمیل به درستی وارد نشده است!'),
            check('resetpass')
                .isLength({min : 5})
                .withMessage('پسورد حداقل 5 کاراکتر باشد'),
            check('resetpassrepeat')
                .isLength({min : 5})
                .withMessage('پسورد حداقل 5 کاراکتر باشد'),   
        ]
    }
}

module.exports = new resetPassValidator();