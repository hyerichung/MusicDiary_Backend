const User = require("../models/User");

exports.checkUser = async (id) => {
  try {
    const existedUser = await User.findOne({ id });

    // diary populate

    return { existedUser };
  } catch (error) {
    return { checkUserError: error };
  }
};

exports.createUser = async ({ id, userName, email, externalUrl, uri }) => {
  try {
    const newUser = await User.create({
      id,
      userName,
      email,
      externalUrl,
      uri,
    });

    return { newUser };
  } catch (error) {
    return { createUserError: error };
  }
};
