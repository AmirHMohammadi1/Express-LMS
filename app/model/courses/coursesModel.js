const mongoose = require('mongoose')
const Schema = mongoose.schema;

const course = mongoose.Schema({
    user : {type : String , default : 'users'},
    title : {type : String , required : true},
    image : {type : String , required : true},
    slug : {type : String , required : true},
    body : {type : String , required : true},
    description : {type : String , required : true},
    date : {type : String , required : true},
    parts : {type : Number , required : true},
    project : {type : Boolean , required : true , default : false},
    time : {type : Number , required : true},
    level : {type : String , required : true},
    languages : {type : String , required : true},
    adminCheck : {type : Boolean , required : true , default : false},
    lernerCount : {type : String , default : 0},
    support : {type : Boolean , required : true , default : true},
    size : {type : Number},
    receipt : {type : String , required : true},
    progress : {type : Number , required : true},
    price : {type : Number , required : true},
    priceOff : {type : Number , required : true},
    teacher : {type : String , required : true},
    typeOfCourse : {type : String , required : true},
    group : {type : String , required : true},
    shortLink : {type : String , required : true},
    tags : {type : String , required : true},
    rating : {type : String , default : 5},
    viewCount : {type : String , default : 0},
    commentCount : {type : Number , default : 0},
} , {
    timestamps : true
})

module.exports = mongoose.model('courses' , course)