const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide your email"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  userName: {
    type: String,
    required: [true, "Please provide your userName"],
    maxlength: 10,
    minlength: 2,
  },
  privateDiaryList: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Diary",
    }],
  },
});

module.exports = mongoose.model("User", userSchema);
