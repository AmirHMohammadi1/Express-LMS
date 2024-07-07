// const express = require('express');
const router = require('express').Router();

// required
const webRouts = require('./web');
const authRoutes = require('./auth');

// middleware
const redirectAuthenticated = require('./../middleware/redirectAuthenticated')


router.use(webRouts);

// logout
router.get('/logout' , (req , res) => {
    req.logOut((err) => {
        if (err) console.log(err);
        res.clearCookie('remember_token');
        res.redirect('/');
    })
})

router.use(redirectAuthenticated.handle , authRoutes);

module.exports  = router;