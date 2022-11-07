const express = require("express");

const {
  suggestLink,
  getSuggestedLinks,
  deleteSuggestedLink,
} = require("../controllers/suggested");

const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middleware/auth");

router.route("/").get(getSuggestedLinks).post(suggestLink);

router
  .route("/:id")
  // .get(getLink)
  // .put(protect, authorize("publisher", "admin"), updateLink)
  .delete(protect, authorize("publisher", "admin"), deleteSuggestedLink);

module.exports = router;
