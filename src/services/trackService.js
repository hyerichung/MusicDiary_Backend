const Track = require("../models/Track");
const Diary = require("../models/Diary");

exports.createTrackService = async ({
  title,
  artist,
  id,
  duration,
  genres,
  uri,
  albumImg,
  preview,
}) => {
  try {
    const newTrack = await Track.create({
      title,
      artist,
      id,
      duration,
      genres,
      uri,
      albumImg,
      preview,
    });

    return { newTrack };
  } catch (err) {
    return { createTrackServiceError: err };
  }
};

exports.pushTrackToDiaryPlaylistService = async (trackId, diary_id) => {
  try {
    const newDiaryPlaylist = await Diary.findByIdAndUpdate(
      diary_id,
      { $push: { playList: trackId } },
      { upsert: true, new: true }
    );

    return { newDiaryPlaylist };
  } catch (err){
    return { pushTrackToDiaryPlaylistServiceError: err };
  }
};

// exports.getPlayListService = async () => {
//   try {
//     console.log("get all playlist");
//   } catch (err) {
//     return { getPlayListServiceError: err };
//   }
// };
