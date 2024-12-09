const Controller = require('./../../../controller')
const courseModel = require('./../../../../model/courses/coursesModel')
const fs = require('fs')

class courseController extends Controller {
    index(req , res){
        res.render('admin/courses')
    }
 
    create(req , res){
        res.render('admin/createCourse' , {messages : req.flash('errors')})
    }

    async store(req , res , next){
        // console.log(req.body)
        // console.log(req.file)
        const result = await this.validationForm(req , res , next)
        if (result) {
            this.courseStore(req , res , next)
            // console.log('process')
        }else{
            if(req.file){
                let filepath = req.file.path;
                fs.unlink(filepath , (err) => {console.log(err)})
            }
            this.back(req , res)
        }
    }

    courseStore(req , res , next){
        // console.log(req)
        // ! کل فیلد ها گرفته شود و ذخیره شود بخش 2 درس 19 و 20
        const course = new courseModel({
            user : req.user.name
        })
        // console.log(course)

        course.save()
        res.redirect('/admin/courses')
    }
}

module.exports = new courseController()