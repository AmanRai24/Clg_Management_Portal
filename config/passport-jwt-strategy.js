const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const Teacher = require("../models/teacher");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "clgportal",
};

passport.use(
  new JWTStrategy(opts, function (jwtPayLoad, done) {
    Teacher.findById(jwtPayLoad._id, function (err, teacher) {
      if (err) {
        console.log("Error in finding teacher!");
        return;
      }

      if (teacher) {
        return done(null, teacher);
      } else {
        return done(null, false);
      }
    });
  })
);

module.exports = passport;