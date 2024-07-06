// const express = require('express');
const router = require('express').Router();

// required
const webRouts = require('./web');
const authRoutes = require('./auth');

// middleware
const redirectAuthenticated = require('./../middleware/redirectAuthenticated')


router.use(webRouts);
router.use(redirectAuthenticated.handle , authRoutes);


module.exports  = router;