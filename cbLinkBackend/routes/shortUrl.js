const express = require("express");
const { shortUrl } = require("../controllers/shortUrl");

// const Link = require("../models/Link");

const router = express.Router({ mergeParams: true });

router.route("/:shortUrl").get(shortUrl);

module.exports = router;
