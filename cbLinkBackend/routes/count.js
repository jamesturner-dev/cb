const express = require("express");
const { getLinkCount, getUserCount } = require("../controllers/count");
const router = express.Router();

// the default route gets the overall link count
router.route("/").get(getLinkCount);

router.route("/users").get(getUserCount);

module.exports = router;
