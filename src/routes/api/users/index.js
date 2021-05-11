const router = require("express").Router();

const { loginUser, getUser } = require("./controller");
const authUser = require("../../middlewares/authUser");

router.get("/login", loginUser);

router.all("*", authUser);
router.get("/:user_id", getUser);

module.exports = router;
