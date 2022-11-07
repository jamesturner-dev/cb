const express = require("express");

const { suggestLink, getSuggestedLinks } = require("../controllers/suggested");

const router = express.Router({ mergeParams: true });
// const { protect, authorize } = require("../middleware/auth");

router.route("/").get(getSuggestedLinks).post(suggestLink);

module.exports = router;
