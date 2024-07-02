// ? for learn - just install & use for require app in this file
require('app-module-path').addPath(__dirname);
// ? for learn - just install & use for layout
require('dotenv').config();
// console.log(process.env.PUBLIC_DIR);

const app = require('app');

new app();