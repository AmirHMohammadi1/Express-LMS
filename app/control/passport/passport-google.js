const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const userModel = require('../../model/auth/users');

passport.serializeUser(function(user, done) {
    done(null, user);
  });
passport.deserializeUser(function(user, done) {
    done(null, user);
 });

passport.use('google' , new googleStrategy({
    clientID : '564727295408-94nhsunvjr6hc9nvq1p627vq2ilj3qda.apps.googleusercontent.com',
    clientSecret : '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',
    callbackURL : 'http://localhost:3000/googlecallback' ,
} , (accessToken , refreshToken , profile , done) => {
        // console.log(profile)
        userModel.findOne({'email' : profile.emails[0].value})
        .then((user , err) => {
            if(err) return done(err)
            if(user) return done(null , user)
            
            const newUser = new userModel({
                name : profile.displayName,
                email : profile.emails[0].value,
                password : profile.id
            })

            newUser.save()
            .then(user , err => {
                if(err) consloe.log(err)
                done(null , newUser)
            })
        })
}))

// userModel.findOne({'email' : email})
//         .then((user , err) => {
//             if (err) return done(err);
//             if (user) return done(err , false , req.flash('errors' , 'این کاربر قبلا ثبت نام کرده است'));
            
//             const addUser = new userModel({
//                 name : req.body.regname,
//                 email,
//                 password
//             })
//             addUser.save()
//             // done(null, addUser); =============================
//             // در صورت نبود result اطلاعات رو بعد از ثبت نمایش میدهد
//             .then((result , err) => {
//                 if (err) return done(err , false , req.flash('errors' , 'نمیتوان اطلاعات را ذخیره کرد!'))
//                 done(null, addUser)
//             })

//         })
