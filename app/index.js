// تمامی افزودنی ها
// express js
const express = require('express');
// path برای مسیریابی
const path = require('path');
// express ejs layouts
const expressLayouts = require('express-ejs-layouts')
// use mongodb
const mongoose = require('mongoose');
// bodyParser
const bodyParser = require('body-parser');
// session & cookies
const session = require('express-session');
const mongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');


// استفاده از express و ساخت شی از آن
const app = express();


module.exports = class Application{
    constructor() {
        this.Serverconfig();
        this.configDatabase();
        this.setConfig();
        this.setRouts();
    }

    Serverconfig() {
        app.listen(3000 , (err) => {
            if(err) console.log(err)
            console.log('server run on port 3000...')
        });
    }

    async configDatabase() {
        await mongoose.connect('mongodb://127.0.0.1/nodemvc');
    }

    setConfig() {
        app.use(express.static(__dirname + '/public/web'));
        // app.use(express.static(__dirname + '/public/admin'))
        app.set('view engine','ejs');
        app.set('views' , path.join(__dirname, 'view/web'));
        // app.set('views' , path.join(__dirname , 'view/admin'))
        app.use(expressLayouts);
        app.set('layout' , 'master');
        app.set('layout extractScripts' , true);
        app.set('layout extractStyles' , true);
        app.use(bodyParser.urlencoded({extended : false}));
        app.use(bodyParser.json());

        // session & cookie
        app.use(session({
            secret : 'secret key',
            resave : false,
            saveUninitialized : true,
            store : mongoStore.create({mongoUrl : 'mongodb://127.0.0.1/nodemvc'}),
            cookie : {secure : false}
        }))
        app.use(cookieParser());
    }

    setRouts() {
        app.use(require('./control/routs'));
    }
}