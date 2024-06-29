const passport = require('passport');
const LocalStrategy = require('passport-local');
const userModel = require('./../../model/auth/users');

passport.serializeUser(function(user, done) {
    done(null, user);
  });
passport.deserializeUser(function(user, done) {
    done(null, user);
 });

passport.use('local-strategy' , new LocalStrategy({
    usernameField : 'email',
    passportField : 'password',
    passReqToCallback : true
} , async (req , email , password , done) => {
        userModel.findOne({'email' : email})
        .then((user , err) => {
            if (err) return done(err);
            if (user) return done(err , false , req.flash('errors' , 'این کاربر قبلا ثبت نام کرده است'));
            
            const addUser = new userModel({
                name : req.body.name,
                email,
                password
            })
            addUser.save()
            // done(null, addUser); =============================
            .then((result , err) => {
                if (err) return done(err , false , req.flash('errors' , 'نمیتوان اطلاعات را ذخیره کرد!'))
                done(null, addUser)
            })

        })
}));