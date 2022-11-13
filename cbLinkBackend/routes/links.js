const express = require("express");

const {
  getLinks,
  getLink,
  addLink,
  updateLink,
  deleteLink,
  getLinkById,
} = require("../controllers/links");

const Link = require("../models/Link");
const advancedResults = require("../middleware/advancedResults");
const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Link, {
      path: "directory",
      select: "name description",
    }),
    getLinks
  )
  .post(protect, authorize("publisher", "admin"), addLink);

router
  .route("/:id")
  .get(getLink)
  .put(protect, authorize("publisher", "admin"), updateLink)
  .delete(protect, authorize("publisher", "admin"), deleteLink);

router.route("/byId/:id").get(getLinkById);

module.exports = router;
