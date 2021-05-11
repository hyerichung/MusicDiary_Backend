const createError = require("http-errors");

const User = require("../../../models/User");

const loginUser = (req, res, next) => {
  console.log(req, "login req");
};

const getUser = async () => {
  // get user Info
};

module.exports = { loginUser, getUser };
