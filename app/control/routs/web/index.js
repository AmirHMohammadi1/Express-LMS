const router = require('express').Router();

const homeControler = require('./../../http/web/homecontroler');


router.get('/' , homeControler.index);


module.exports  = router;