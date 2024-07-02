const router = require('express').Router();

// controler
const loginControler = require('../../http/auth/logincontroler')

// middleware
const loginValidator = require('../../validators/loginvalidator')

router.get('/login' , loginControler.showForm);

router.post('/login' , loginValidator.handle() , loginControler.submitForm)


module.exports  = router;