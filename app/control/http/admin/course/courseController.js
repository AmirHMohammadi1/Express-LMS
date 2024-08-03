const Controller = require('./../../../controller')

class courseController extends Controller {
    index(req , res){
        res.render('admin/courses')
    }

    create(req , res){
        res.render('admin/createCourse')
    }
}

module.exports = new courseController()