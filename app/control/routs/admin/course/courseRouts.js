const router = require('express').Router()

const upload = require('./../../../http/admin/uploadimages')

// controller
const courseCotroller = require('./../../../http/admin/course/courseController')

// middleware
const courseFormValidation = require('./../../../../control/validators/courseFormValidation')
const imagetobody = require('./../../../middleware/imagetobody')

router.get('/courses' , courseCotroller.index)
router.get('/courseCreate' , courseCotroller.create)
router.post('/courseStore' , upload.single('image') ,imagetobody.handle , courseFormValidation.handle() , courseCotroller.store)

module.exports = router;