const router = require('express').Router()

// controller
const courseCotroller = require('./../../../http/admin/course/courseController')

router.get('/courses' , courseCotroller.index)
router.get('/courseCreate' , courseCotroller.create)
// router.post('/store' , courseCotroller.store)

module.exports = router;