const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Link = require("../models/Link");

// ** @desc   Search all links
// ** @route  POST /api/v1/search
// ** @access Public
exports.searchLinks = asyncHandler(async (req, res, next) => {
  const { searchTerm } = req.body;

  if (searchTerm) {
    // const links = await Link.find({ directory: req.params.linkId });

    const links = [];

    Link.find({ $text: { $search: searchTerm } }).exec(function (err, results) {
      return res.status(200).json({
        success: true,
        // count: links.length,
        data: results,
      });
      // console.log("results", results);
    });
  } else {
    return next(new ErrorResponse(`Please add a search term`, 400));
  }
});
