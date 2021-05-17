const mongoose = require("mongoose");

const DiarySchema = new mongoose.Schema({
  hashTag: {
    type: String,
    required: [true, "Please provide a hashTag"],
  },
  location: {
    type: String,
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
      }
    ],
  },
}, { timestamps: true });

module.exports = mongoose.model("Diary", DiarySchema);
