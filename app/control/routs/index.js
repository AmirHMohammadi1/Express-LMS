// const express = require('express');
const router = require('express').Router();

// required
const webRouts = require('./web');
const registerRoutes = require('./auth/register');
const loginRoutes = require('./auth/login');



router.use(webRouts);
router.use(registerRoutes);
router.use(loginRoutes);


module.exports  = router;