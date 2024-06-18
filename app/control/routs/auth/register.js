const router = require('express').Router();


router.get('/register' , (req , res) => {
    res.render('register');
});

router.post('/register' , (req , res) => {
    // res.render('index-2')
    res.json(req.body);
});


module.exports  = router;