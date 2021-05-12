const SpotifyWebApi = require("spotify-web-api-node");

const User = require("../../../models/User");

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

exports.getAuthUrl = async (req, res, next) => {
  const scopes = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-library-modify",
    "user-library-read",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-read-recently-played",
    "user-top-read",
  ];

  const spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId
  });

  const authorizeURL = await spotifyApi.createAuthorizeURL(scopes);

  return res.json({
    result: "ok",
    data: { authUrl: authorizeURL }
  });
}

exports.getAccessToken = async (req, res, next) => {
  try {
    const authCode = req.body.authCode;

    const spotifyApi = new SpotifyWebApi({ clientId, clientSecret, redirectUri });
    const { body } = await spotifyApi.authorizationCodeGrant(authCode)

    spotifyApi.setAccessToken(body["access_token"]);
    spotifyApi.setRefreshToken(body["refresh_token"]);

    return res.json({
      result: "ok",
      data: { accessToken: body.access_token }
    });
  } catch (err) {
    next(err)
  }
}

exports.getUser = async () => {
  // get user Info
};
