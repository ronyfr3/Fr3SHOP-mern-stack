const Strategy = require("passport-local").Strategy;
const User = require("../models/AuthModel");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

//@__done() function tell when done what it has to done next
//@__done() goes to thinking about successRedirect/failureRedirect at some point to choose what to do next
//@__if err--> done('oops err',null) then it goes for failureRedirect:'/'
//this done() call back runs after strategy function

//@__this function mainly below done() callback function
// function (error, user, info) {
//   if (error) {
//     return res.status(500).json({
//       message: "Something Wrong!",
//       error: error.message || "Internal Error",
//     });
//   }
//   return res.status(200).json({
//     message: "User is now authenticated",
//   });
// })(req, res, next); //this is second argument as above parameter must be same
// });
//@__same as done(null,user) which implemented in Users.js to refer this done() cb

//if we want to add more staf in user info such as age,comapny,salary
//we need passReqToCallback:true
//and we added req to get that value such  as const salary=req.body.salary

const signupStrategy = new Strategy(
  { passReqToCallback: true, usernameField: "email" },
  function (req, email, password, done) {
    //usernameField:'email'},function(req,email,password-->now passport get email as username and password in this cb()
    User.findOne({ email })
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err, null);
        }
        if (user) {
          return done("user already exist", null);
        }
        const encryptedPassword = bcrypt.hashSync(password, salt);
        let newUser = new User({
          email,
          password: encryptedPassword,
        });

        //if user created we need to send back entire user in Users.js as res.json(insertedUser as user)
        newUser.save((error, insertedUser) => {
          if (error) {
            return done(error, null);
          }
          //we dont want send hashedpassword to reactjs
          //  delete inserted.password;
          return done(null, insertedUser);
        });
      });
  }
);

module.exports = signupStrategy;
