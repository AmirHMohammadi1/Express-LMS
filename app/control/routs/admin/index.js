const router = require('express').Router();
// const express = require('express')
// const path = require('path')
// const expressLayouts = require('express-ejs-layouts')
// const app = express()

// app.use(express.static(__dirname + 'public/admin'));
// app.set('view engine', 'ejs');
// app.set('views' , path.join(__dirname, 'view/admin'));
// app.use(expressLayouts);
// app.set('layout' , 'admin/master');
// app.set('layout extractScripts' , true);
// app.set('layout extractStyles' , true);

router.use((req , res , next) => {
    res.locals.layout = 'admin/master';
    // res.locals.static = 'public/admin'
    next()
})
// router.use(express.static(__dirname + 'public/admin'));


const adminController = require('./../../http/admin/adminController');

// router.use(app)
router.get('/' , adminController.index);

module.exports = router;