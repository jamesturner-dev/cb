const express = require("express");

const {
  getDirs,
  getDirectory,
  createDir,
  updateDirectory,
  deleteDirectory,
  directoryPhotoUpload,
} = require("../controllers/directories");

const Directory = require("../models/Directory");
const linkRouter = require("./links");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers ITEMS ROUTER
router.use("/:directoryId/links", linkRouter);

router
  .route("/:id/photo")
  .put(protect, authorize("publisher", "admin"), directoryPhotoUpload);
router
  .route("/")
  // .get(advancedResults(Directory, "links"), getDirectories)
  .get(advancedResults(Directory), getDirs)
  // .get(getDirs)
  .post(protect, authorize("publisher", "admin"), createDir);
router
  .route("/:id")
  .get(getDirectory)
  .put(protect, authorize("publisher", "admin"), updateDirectory)
  .delete(protect, authorize("publisher", "admin"), deleteDirectory);

module.exports = router;
