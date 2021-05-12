const router = require("express").Router();

const userControllers = require("./controller");
const authUser = require("../../middlewares/authUser");

router.get("/login/url", userControllers.getAuthUrl);
router.post("/login/token", userControllers.getAccessToken);

// router.all("*", authUser);
// router.get("/:user_id", getUser);

module.exports = router;
