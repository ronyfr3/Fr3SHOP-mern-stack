const passport = require("passport");
const User = require("../models/AuthModel");

//@___on requesting a route or hit a specific route/path
//@___deserialize-->sererialize-->check error-->user can see what it is getting from it

//add user into session it comes with login click
passport.serializeUser(function (user, done) {
  done(null, user.email); //add email into session
});
//check previous session with that id and give user info
//hit any route it will come here to deserialize checck user
passport.deserializeUser(function (email, done) {
  //id will be user._id if you want to put user id on passport obj in the session
  User.findOne({ email })
    .lean()
    .exec((err, user) => {
      done(err, user);
    });
});
//after deserialize call a specific route with this route there is session ,
//inside session there is passport object there you can find your email

//import strategies
const signinStrategy = require("./signinStrategy");
const signupStrategy = require("./signupStartegy");

//register strategy into passport
//after that we can use passport.authenticate('name of the strategy like-> local-signin')
passport.use("local-signin", signinStrategy);
passport.use("local-signup", signupStrategy);

module.exports = passport;
