const router = require('express').Router()

// controler
const resetPassControler = require('../../http/auth/resetpass')

// middleware
const resetPassValidator = require('../../validators/resetpass')

router.get('/resetpass:token' , resetPassControler.showForm)

router.post('/resetpass' , resetPassValidator.handle() , resetPassControler.submitForm)


module.exports  = router;