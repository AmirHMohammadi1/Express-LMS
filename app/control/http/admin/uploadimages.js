const multer = require('multer');
const mkdirp = require('mkdirp')
const fs = require('fs')

const getdir = ()=>{
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();

    return `./app/public/upload/images/${year}/${month}/${day}`;
}

const storageimage = multer.diskStorage({
    destination : (req , file , callback) => {
        // console.log(file)
        let dir = getdir()
        // console.log(dir)
        mkdirp.mkdirp(dir).then((err) => {
            if(err) console.log(err)
            callback(null , dir)
        })
        
    },
    filename : (req , file , callback) => {
        // console.log(file)
        let filepath = getdir() + '/' + file.originalname;
        // console.log(filepath)
        if (!fs.existsSync(filepath)) {
            callback(null , file.originalname)
        } else {
            callback(null , Date.now() + '-' + file.originalname)
        }
    }
})

const uploadimage = multer({
    storage : storageimage,
    // ! محدودیت های فایل را میتوان اینجا مشخص کرد
    limits : {
        fileSize : 1024 * 1025 * 5
    }
})

module.exports = uploadimage;