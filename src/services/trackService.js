const Track = require("../models/Track");
const Diary = require("../models/Diary");

exports.createTrackService = async ({
  title,
  artist,
  id,
  duration,
  date,
  genres,
  uri,
  albumImg,
  preview,
  trackEnergy,
}) => {
  try {
    const newTrack = await Track.create({
      title,
      artist,
      id,
      duration,
      date,
      genres,
      uri,
      albumImg,
      preview,
      trackEnergy,
    });

    return { newTrack };
  } catch (err) {
    return { createTrackServiceError: err };
  }
};

exports.pushTrackToDiaryPlaylistService = async (trackId, diary_id, currentEnergy, trackEnergy) => {
  try {
    const updatedEnergyScore = Math.floor((((currentEnergy * 0.01) + trackEnergy) / 2) * 100);

    const newDiaryPlaylist = await Diary.findByIdAndUpdate(
      diary_id,
      { $push: { playList: trackId }, $set: { "energyScore": updatedEnergyScore } },
      { upsert: true, new: true }
    );

    return { newDiaryPlaylist };
  } catch (err){
    return { pushTrackToDiaryPlaylistServiceError: err };
  }
};
