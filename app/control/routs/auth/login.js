const router = require('express').Router();

const loginControler = require('./../../http/auth/login')

router.get('/login' , loginControler.showForm);


module.exports  = router;