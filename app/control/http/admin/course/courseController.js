const Controller = require('./../../../controller')
const courseModel = require('./../../../../model/courses/coursesModel')

class courseController extends Controller {
    index(req , res){
        res.render('admin/courses')
    }

    create(req , res){
        res.render('admin/createCourse' , {messages : req.flash('errors')})
    }

    async store(req , res , next){
        // console.log(req.body)
        const result = await this.validationForm(req , res , next)
        if (result) {
            this.courseStore(req , res , next)
        }else{
            this.back(req , res)
        }
    }

    courseStore(req , res , next){
        // console.log(req)

        const course = new courseModel({
            user : req.user.name
        })
        console.log(course)
    }
}

module.exports = new courseController()