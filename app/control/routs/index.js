// const express = require('express');
const router = require('express').Router();

// required
const webRouts = require('./web');
const authRoutes = require('./auth');
const adminRouts = require('./admin');

// middleware
const redirectAuthenticated = require('./../middleware/redirectAuthenticated')
const redirectAdmin = require('./../middleware/redirectAdmin')


// admin
router.use('/admin' , redirectAdmin.handle , adminRouts)

// logout
router.get('/logout' , (req , res) => {
    req.logOut((err) => {
        if (err) console.log(err);
        res.clearCookie('remember_token');
        res.redirect('/');
    })
})

// web
router.use('/' , webRouts);
router.use(redirectAuthenticated.handle , authRoutes);







module.exports  = router;