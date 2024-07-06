// const express = require('express');
const router = require('express').Router();

// required
const registerRoutes = require('./registerrouter');
const loginRoutes = require('./loginrouter');


router.use(registerRoutes);
router.use(loginRoutes);


module.exports  = router;