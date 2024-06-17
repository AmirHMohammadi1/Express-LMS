const router = require('express').Router();


router.get('/' , (req , res) => {
    res.render('index-2')
});


module.exports  = router;