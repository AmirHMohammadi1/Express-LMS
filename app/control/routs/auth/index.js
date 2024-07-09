// const express = require('express');
const router = require('express').Router();
const passport = require('passport');

// required
const registerRoutes = require('./registerrouter');
const loginRoutes = require('./loginrouter');


router.use(registerRoutes);
router.use(loginRoutes);


// google
router.get('/google' , passport.authenticate('google' , {scope : ['email' , 'profile']}));
router.get('/googlecallback' , passport.authenticate('google' , {successRedirect : '/' , failureRedirect : 'login'}))


module.exports  = router;