const {check} = require('express-validator');

class registerValidator {
    handle() {
        return[
            check('title')
                .isLength({min : 15})
                .withMessage('عنوان نمیتواند کمتر از 15 حرف باشد'),
            check('image')
                .not().isEmpty()
                .withMessage('عکسی انتخاب نکردید'),
            check('description')
                .isLength({min : 100})
                .withMessage('توضیحان حداقل 100 حرف باشد'),
            check('body')
                .isLength({min : 15})
                .withMessage('کد 1'),
            check('date')
                .isLength({min : 15})
                .withMessage('2'),
            check('part')
                .isLength({min : 15})
                .withMessage('3'),
            check('time')
                .isLength({min : 15})
                .withMessage('4'),
            check('level')
                .isLength({min : 15})
                .withMessage('5'),
            check('languages')
                .isLength({min : 15})
                .withMessage('6'),
            check('size')
                .isLength({min : 15})
                .withMessage('7'),
            check('receipt')
                .isLength({min : 15})
                .withMessage('8'),
            check('progress')
                .isLength({min : 15})
                .withMessage('9'),
            check('teacher')
                .isLength({min : 15})
                .withMessage('10'),
            check('typeOfCourse')
                .isLength({min : 15})
                .withMessage('11'),
            check('group')
                .isLength({min : 15})
                .withMessage('12'),
            check('tags')
                .isLength({min : 15})
                .withMessage('13'),
        ]
    }
}


module.exports = new registerValidator();