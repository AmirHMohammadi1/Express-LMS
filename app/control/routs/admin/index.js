const router = require('express').Router();

// courses
const courseRouts = require('./course/courseRouts')


router.use((req , res , next) => {
    res.locals.layout = 'admin/master';
    // res.locals.static = 'public/admin'
    next()
})


const adminController = require('./../../http/admin/adminController');

// router.use(app)
router.get('/' , adminController.index);
router.use(courseRouts)

module.exports = router;