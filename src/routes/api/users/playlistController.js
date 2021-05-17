const SpotifyWebApi = require("spotify-web-api-node");
const { createTrackService, getPlayListService, pushTrackToDiaryPlaylistService } = require("../../../services/trackService");

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

exports.serarchTrack = async (req, res, next) => {
  try {
    const accessToken = req.accessToken;
    const { user_id, diary_id } = req.params;
    const { keyword } = req.query;

    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(accessToken);

    const { body } = await spotifyApi.searchTracks(keyword, { limit: 10, offset: 1, country: "KR" });

    const nextTracks = body.tracks.next;
    const prevTracks = body.tracks.previous;

    const resultFormat = body.tracks.items.map(track => ({
      albumImg: track.album.images[2],
      artist: track.artists,
      duration: track.duration_ms,
      id: track.id,
      title: track.name,
      uri: track.uri,
      preview: track.preview_url,
      nextTracks,
    }));

    return res.json({ result: "ok", data: resultFormat });
  } catch (err) {
    next(err);
  }
};

exports.addNewTrackToDiaryPlaylist = async (req, res, next) => {
  try {
    // create track
    const { trackInfo } = req.body;
    const { user_id, diary_id } = req.params;

    const { trackId } = await createTrackService(trackInfo, user_id, diary_id );

    if (trackId) {
      const { newDiaryPlaylist } = await pushTrackToDiaryPlaylistService(trackId, user_id, diary_id);
      return res.json({ result: "ok", data: { newTrackId: trackId } });
    }

  } catch (err) {
    next(err);
  }
}

exports.getDiaryPlaylist = async(req, res, next) => {
  try {
    // const userId;
    // const diaryId;

    //  const { playListInfo } = await getPlayListService(userId, diaryId);
  } catch (err) {
    // next(err);
  }
};
