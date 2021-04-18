const Strategy = require("passport-local").Strategy;
const User = require("../models/AuthModel");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const loginStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  },
  function (req, email, password, done) {
    //usernameField:'email'},function(req,email,password-->now passport get email as username and password in this cb()
    User.findOne({ email })
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err, null);
        }
        if (!user) {
          return done(null, false, { message: "No user found." });
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
          return done(null, false, { message: "Oops! Wrong Password" });
        }
        return done(null, user);
      });
  }
);

module.exports = loginStrategy;
