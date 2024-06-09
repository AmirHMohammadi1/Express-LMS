const express = require('express');
const app = express();


module.exports = class Application{
    constructor() {
        this.Serverconfig();
    }

    Serverconfig() {
        app.get('/' , (req , res) => {
            res.end('<h1>realy hello world');
        })

        app.listen(3000 , (err) => {
            if(err) console.log(err)
            console.log('server run on port 3000...')
        })
    }
}