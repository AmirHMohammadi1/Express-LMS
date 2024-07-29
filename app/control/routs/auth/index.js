// const express = require('express');
const router = require('express').Router();
const passport = require('passport');

// required
const registerRoutes = require('./registerrouter');
const loginRoutes = require('./loginrouter');
const forgetpass = require('./forget-pass');
const resetpass = require('./resetpass')


router.use(registerRoutes);
router.use(loginRoutes);
router.use(forgetpass)
router.use(resetpass)


// google
router.get('/google' , passport.authenticate('google' , {scope : ['email' , 'profile']}));
router.get('/googlecallback' , passport.authenticate('google' , {successRedirect : '/' , failureRedirect : 'login'}))


module.exports  = router;