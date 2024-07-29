const {check} = require('express-validator');


class forgetPassValidator {
    handle() {
        return[
            check('forgetPassEmail')
                .isEmail()
                .withMessage('ایمیل به درستی وارد نشده است!')
        ]
    }
}

module.exports = new forgetPassValidator();