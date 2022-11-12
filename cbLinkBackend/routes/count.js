const express = require("express");
const { getCount } = require("../controllers/count");
const router = express.Router();

router.route("/").get(getCount);

module.exports = router;
