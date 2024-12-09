const { error } = require('console');
const {check} = require('express-validator');
const path = require('path')

class registerValidator {
    handle() {
        return[
            check('title')
                .isLength({min : 1})
                .withMessage('عنوان نمیتواند کمتر از 15 حرف باشد'),
            check('image')
                .custom((value) => {
                    if (!value){
                        throw new Error('عکسی انتخاب نکردید')
                    }else{
                        const fileExe = ['.png' , '.jpg' , '.webp' , '.jpeg']
                        if(!fileExe.includes(path.extname(value))){
                            throw new Error('فرمت فایل webp نیست')
                        }
                    }
                    throw new Error('فایل ارسال نشد')
                }),
            check('description')
                .isLength({min : 1})
                .withMessage('توضیحان حداقل 100 حرف باشد'),
            check('body')
                .isLength({min : 1})
                .withMessage('کد 1'),
            check('date')
                .isLength({min : 1})
                .withMessage('2'),
            check('part')
                .isLength({min : 1})
                .withMessage('3'),
            check('time')
                .isLength({min : 1})
                .withMessage('4'),
            check('level')
                .isLength({min : 1})
                .withMessage('5'),
            check('languages')
                .isLength({min : 1})
                .withMessage('6'),
            check('size')
                .isLength({min : 1})
                .withMessage('7'),
            check('receipt')
                .isLength({min : 1})
                .withMessage('8'),
            check('progress')
                .isLength({min : 1})
                .withMessage('9'),
            check('teacher')
                .isLength({min : 1})
                .withMessage('10'),
            check('typeOfCourse')
                .isLength({min : 1})
                .withMessage('11'),
            check('group')
                .isLength({min : 1})
                .withMessage('12'),
            check('tags')
                .isLength({min : 1})
                .withMessage('13'),
        ]
    }
}


module.exports = new registerValidator();