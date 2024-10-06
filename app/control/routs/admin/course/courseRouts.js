const router = require('express').Router()

// controller
const courseCotroller = require('./../../../http/admin/course/courseController')

// middleware
const courseFormValidation = require('./../../../../control/validators/courseFormValidation')

router.get('/courses' , courseCotroller.index)
router.get('/courseCreate' , courseCotroller.create)
router.post('/courseStore' , courseFormValidation.handle() , courseCotroller.store)

module.exports = router;