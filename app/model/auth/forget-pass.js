const mongoose = require('mongoose');

const forgetPass = mongoose.Schema({
    email : {type : String , require : true},
    token : {type : String , require : true},
    use : {type : Boolean , default : false},
} , {
    timestamps : false
})

module.exports = mongoose.model('forgetpass' , forgetPass)