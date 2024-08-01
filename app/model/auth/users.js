const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uniqueString = require('unique-string')

const user = mongoose.Schema({
    admin : {type : Boolean , default : false},
    name : {type : String , require : true},
    email : {type : String , require : true},
    password : {type : String , require : true},
    rememberToken : {type : String , default : ''}
} , {
    timestamps : true
})

user.pre('save' , function (next) {
    const salt = bcrypt.genSaltSync(15);
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
    next();
})

user.pre('findOneAndUpdate' , function (next) {
    const salt = bcrypt.genSaltSync(15);
    const hash = bcrypt.hashSync(this.getUpdate().$set.password, salt);
    this.getUpdate().$set.password = hash;
    next();
})

user.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password , this.password)
}

user.methods.setRememberToken = function(res) {
    const token = uniqueString();
    res.cookie('remember_token' , token , {maxAge : 1000 * 60 * 60 * 24 * 6 , httpOnly : true , signed : true})
    this.updateOne({rememberToken : token})
    .then((ok , err) => {
        if (err) console.log(err)
    })
}

module.exports = mongoose.model('users' , user);