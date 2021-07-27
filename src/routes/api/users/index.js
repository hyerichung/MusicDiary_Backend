const router = require("express").Router();

const userControllers = require("./userController");
const diaryControllers = require("./diaryController");
const playlistController = require("./playlistController");
const authUser = require("../../middlewares/authUser");

router.get("/login/url", userControllers.getAuthUrl);
router.post("/login/token", userControllers.getToken);
router.get("/login/user-info", authUser, userControllers.getUserInfo);

router.post("/:user_id/diary/new", authUser, diaryControllers.addNewDiary);
router.get("/:user_id/diary/all", authUser, diaryControllers.getDiaries);

router.post("/:user_id/diary/:diary_id/track/new", authUser, playlistController.addNewTrackToDiaryPlaylist);

module.exports = router;
