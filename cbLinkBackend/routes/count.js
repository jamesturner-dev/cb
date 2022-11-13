const express = require("express");
const { getLinkCount } = require("../controllers/count");
const router = express.Router();

// the default route gets the overall link count
router.route("/").get(getLinkCount);

router.

module.exports = router;
