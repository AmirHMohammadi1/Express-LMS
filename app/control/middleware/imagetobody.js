const middleware = require('./middleware');
class imagetobody extends middleware {
    handle(req , res , next){
        if(!req.file){
            req.body.image = undefined;
        }else{
            req.body.image = req.file.originalname;
        }
        next();
    }
}

module.exports = new imagetobody();