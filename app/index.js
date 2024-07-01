// تمامی افزودنی ها
// express js
const express = require('express');
// path برای مسیریابی
const path = require('path');
// express ejs layouts
// const expressLayouts = require('express-ejs-layouts')
// use mongodb
const mongoose = require('mongoose');
// bodyParser
const bodyParser = require('body-parser');
// session & cookies
const session = require('express-session');
const mongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
// flash for show error & message in form
const flash = require('connect-flash');
// passport
const passport = require('passport');

// global config
const config = require('./configs')


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
        await mongoose.connect(config.database.DARABASE_URL);
    }

    setConfig() {
        // passport
        require('./control/passport/passport-local');

        app.use(express.static(__dirname + config.layout.PUBLIC_DIR));
        app.set('view engine', config.layout.VIEW_ENGINE);
        app.set('views' , path.join(__dirname, config.layout.VIEW_DIR));
        app.use(config.layout.EJS.expressLayouts);
        app.set('layout' , config.layout.EJS.layout);
        app.set('layout extractScripts' , config.layout.EJS.EXTRCTSCRIPT);
        app.set('layout extractStyles' , config.layout.EJS.EXTRCTSTYLE);
        app.use(bodyParser.urlencoded({extended : false}));
        app.use(bodyParser.json());
        app.use(flash());

        // session & cookie
        app.use(session({
            secret : config.session.SECRET,
            resave : config.session.RESAVE,
            saveUninitialized : config.session.SAVEUNINITIALIZED,
            store : mongoStore.create({mongoUrl : config.session.STORE}),
            cookie : {secure : config.session.COOKIE_SECURE}
        }))
        app.use(cookieParser());

        // passport
        app.use(passport.initialize());
        app.use(passport.session());
    }

    setRouts() {
        app.use(require('./control/routs'));
    }
}