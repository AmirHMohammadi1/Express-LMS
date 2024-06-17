// const express = require('express');
const router = require('express').Router();

// required
const webRouts = require('./web');
const registerRoutes = require('./auth/register');
const loginRoutes = require('./auth/login');



router.get('/' , webRouts);
router.get('/register' , registerRoutes);
router.get('/login' , loginRoutes);


module.exports  = router;