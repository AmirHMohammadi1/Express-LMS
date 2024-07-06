const user = require('./../../model/auth/users')

class rememberLogin {
    handle(req , res , next){
        if (!req.isAuthenticated()) {
            const rememberToken = req.signedCookies.remember_token;
            // console.log(rememberToken)
            // console.log("====================")
            // console.log(req)
            if (rememberToken) {
                // this.userFind(rememberToken , req , next)
                user.findOne({rememberToken})
                .then(user => {
                    if (user) {
                        // console.log(user)
                        req.login(user , err => {
                            if (err) console.log(err)
                        })
                    }else {
                        next()
                    }
                })
            }
        }
        next()
    }

    // userFind(rememberToken , req , next) {
    //     user.findOne({rememberToken})
    //     .then(user => {
    //         if (user) {
    //             req.login(user , err => {
    //                 if (err) console.log(err)
    //             })
    //         }else {
    //             next()
    //         }
    //     })
    // }
}

module.exports = new rememberLogin