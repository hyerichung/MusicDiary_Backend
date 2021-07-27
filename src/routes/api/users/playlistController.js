const { createTrackService, pushTrackToDiaryPlaylistService } = require("../../../services/trackService");

exports.addNewTrackToDiaryPlaylist = async (req, res, next) => {
  try {
    const { trackInfo, currentEnergy } = req.body;
    const { user_id, diary_id } = req.params;

    const { newTrack } = await createTrackService(trackInfo, user_id, diary_id);

    if (newTrack) {
      const { newDiaryPlaylist } = await pushTrackToDiaryPlaylistService(
        newTrack._id, diary_id, currentEnergy, trackInfo.trackEnergy
      );

      return res.json({
        result: "ok",
        data: {
          newTrackInfo: newTrack, energyScore: newDiaryPlaylist.energyScore,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};
