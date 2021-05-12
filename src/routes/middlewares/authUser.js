const createError = require("http-errors");

const User = require("../../models/User");

const authUser = (req, res, next) => {
  const authorization = req.get("authorization");

  if (authorization?.startsWith("Bearer ")) {
    try {
      // verify token
      // "../utils/verifyToken";
      // find user by user id
      // send user info to next router
    } catch (err) {
      // return 401
    }
  } else {
    return next(createError(401, new Error("Unauthorized token")));
  }
};

module.exports = authUser;
