const router = require("express").Router();
const passport = require("./index");

//@__passport.authenticate behind the sence use req object to work with required user model property in signupStrategy.js
//@__function(usename,password,done)<--req object access this username,password etc

//@__REGISTER
//@__hit /signup route passport authenticate user going to local-signup strategy--> index.js-->signupStrategy.js
router.post("/signup", (req, res, next) => {
  //@__custom callback
  //@__this call back function(error,user,info) is same as the signupStartegy.js done(error,user,info) cb function must be same parameter
  //@__this custom callback gives json back to reactjs
  passport.authenticate("local-signup", function (error, user, info) {
    if (error) {
      return res.status(500).json({
        message: error || "Something Wrong!",
      });
    }
    //passport-login
    req.logIn(user, function (error) {
      if (error) {
        return res.status(400).json({
          message: error || "Error occured!",
        });
      }
      user.isAuthenticated = true;
      return res.json(user);
    });
  })(req, res, next); //this is second argument as above parameter must be same this parameter used by passport.authenticate to get user info by req obj and do next()
});

//@__LOGIN
router.post("/signin", function (req, res, next) {
  //@__custom callback
  //@__this call back function(error,user,info) is same as the signupStartegy.js done(error,user,info) cb function must be same parameter
  //@__this custom callback gives json back to reactjs
  passport.authenticate("local-signin", function (error, user, info) {
    if (error) {
      return res.status(400).json({
        message: error || "Something Wrong!",
      });
    }
    //passport-login
    req.logIn(user, function (error) {
      if (error) {
        return res.status(400).json({
          message: error || "Error occured!",
        });
      }
      user.isAuthenticated = true;
      return res.json(user);
    });
  })(req, res, next); //this is second argument as above parameter must be same this parameter used by passport.authenticate to get user info by req obj and do next()
});
module.exports = router;
