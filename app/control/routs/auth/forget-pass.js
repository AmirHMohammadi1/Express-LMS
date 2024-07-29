const router = require('express').Router();

// controler
const forgetPassControler = require('../../http/auth/forget-pass')

// middleware
const forgetPassValidator = require('../../validators/forget-pass')

router.get('/forgetpass' , forgetPassControler.showForm);

router.post('/forgetpass' , forgetPassValidator.handle() , forgetPassControler.submitForm)


module.exports  = router;