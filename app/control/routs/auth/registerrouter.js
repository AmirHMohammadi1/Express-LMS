const router = require('express').Router();

// controler
const registerControler = require('../../http/auth/registercontroler');


// middleware
const registerValidator = require('../../validators/registervalidator')


router.get('/register' , registerControler.showForm);

router.post('/register' , registerValidator.handle() , registerControler.submitForm);


module.exports  = router;