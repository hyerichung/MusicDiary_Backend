const router = require("express").Router();

const userControllers = require("./userController");
const diaryControllers = require("./diaryController");
const authUser = require("../../middlewares/authUser");

router.get("/login/url", userControllers.getAuthUrl);
router.post("/login/token", userControllers.getAccessToken);
router.get("/login/user-info", authUser, userControllers.getUserInfo);

// router.all("*", authUser);
// router.get("/:user_id/", getUser);
router.post("/:user_id/diary/new", authUser, diaryControllers.createDiary);

module.exports = router;
