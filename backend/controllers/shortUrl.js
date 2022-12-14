const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Link = require("../models/Link");

// ** @desc   Get short URL
// ** @route  GET /api/v1/shortUrl
// ** @access Public
exports.shortUrl = asyncHandler(async (req, res, next) => {
  const url = req.params.shortUrl;

  if (!url) {
    return next(new ErrorResponse(`Request Param Failed`, 400));
  }

  const link = await Link.find({ shortUrl: url });

  if (!link) {
    return next(
      new ErrorResponse(
        `Link not found with URL of ${req.params.shortUrl}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: link,
  });
});
