const mongoose = require("mongoose");

const DiarySchema = new mongoose.Schema({
  hashTag: {
    type: String,
    required: [true, "Please provide a hashTag"],
  },
  location: {
    type: String,
    unique: true,
    required: [true, "Please provide a location"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  playList: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Track",
      },
      { type: mongoose.Schema.Types.ObjectId,
        ref: "Photo"
      }
    ],
  },
});

module.exports = mongoose.model("Diary", DiarySchema);