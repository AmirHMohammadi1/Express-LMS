// تمامی افزودنی ها
// express js
const express = require('express');
// path برای مسیریابی
const path = require('path');


// استفاده از express و ساخت شی از آن
const app = express();


module.exports = class Application{
    constructor() {
        this.Serverconfig();
        this.setConfig();
    }

    Serverconfig() {
        app.get('/' , (req , res) => {
            res.render('index-2')
        });
        app.get('/admin' , (req , res) => {
            res.render('admin-index')
        });

        app.listen(3000 , (err) => {
            if(err) console.log(err)
            console.log('server run on port 3000...')
        });
    }

    setConfig() {
        app.use(express.static(__dirname + '/public/web'));
        app.use(express.static(__dirname + '/public/admin'))
        app.set('view engine','ejs');
        app.set('views' , path.join(__dirname, 'view/web'));
        app.set('views' , path.join(__dirname , 'view/admin'))
    }
}