const router = require('express').Router();

const registerControler = require('./../../http/auth/registercontroler')


router.get('/register' , registerControler.showForm);

router.post('/register' , registerControler.submitForm);


module.exports  = router;