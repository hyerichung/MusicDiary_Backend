const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  artist: {
    type: String,
    required: [true, "Please provide a title"],
  },
  id: {
    type: String,
    required: [true, "Please provide a trackId"],
  },
  duration: {
    type: Number,
    required: [true, "Please provide a duration"],
  },
  genres: {
    type: Array,
    default: [],
  },
  uri: {
    type: String,
    required: [true, "Please provide a uri"],
  },
  albumImg: {
    type: Object,
    required: [true, "Please provide a albumUrl"],
  },
  preview: {
    type: String,
    required: [true, "Please provide a externalUrl"],
  },
}, { timestamps: true });

module.exports = mongoose.model("Track", TrackSchema);
