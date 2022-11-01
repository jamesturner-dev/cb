const express = require("express");

const { getCount } = require("../controllers/count");

const router = express.Router({ mergeParams: true });
// const { protect, authorize } = require("../middleware/auth");

router.route("/").get(getCount);
// .post(protect, authorize("publisher", "admin"), setCount);

module.exports = router;
