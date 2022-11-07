const express = require("express");

const { suggestLink } = require("../controllers/suggested");

const router = express.Router({ mergeParams: true });
// const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  // .get(getCount);
  .post(suggestLink);

module.exports = router;
