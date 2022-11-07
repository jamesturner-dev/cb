const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const SuggestedLink = require("../models/SuggestedLink");

// ** @desc   Get all suggested links
// ** @route  GET /api/v1/suggested
// ** @access Public
// exports.getSuggestedLinks = asyncHandler(async (req, res, next) => {
//   if (req.params.linkId) {
//     const suggestedLinks = await SuggestedLink.find({ directory: req.params.linkId });
//     return res.status(200).json({
//       success: true,
//       count: links.length,
//       data: links,
//     });
//   } else {
//     res.status(200).json(res.advancedResults);
//   }
// });

// ** @desc   Get single suggested link
// ** @route  GET /api/v1/links:shortUrl
// ** @access Public
// exports.getSuggestedLink = asyncHandler(async (req, res, next) => {
//   const link = await SuggestedLink.find({ shortUrl: req.params.shortUrl });
//   console.log(req.params.shortUrl);
//   if (!link) {
//     return next(
//       new ErrorResponse(`Link not found with id of ${req.params.shortUrl}`, 404)
//     );
//   }

//   res.status(200).json({
//     success: true,
//     data: link,
//   });
// });

// ** @desc   Suggest new link
// ** @route  POST /api/v1/links/suggest
// ** @access Public

exports.suggestLink = asyncHandler(async (req, res, next) => {
  if (!req.body.longUrl) {
    return next(new ErrorResponse("No URL provided", 404));
  }

  if (!req.body.title) {
    return next(new ErrorResponse("No title provided", 404));
  }

  if (!req.body.description) {
    return next(new ErrorResponse("No description provided", 404));
  }

  const suggestedLink = await SuggestedLink.create(req.body);

  res.status(201).json({
    success: true,
    data: suggestedLink,
  });
});

// ** @desc   delete link
// ** @route  DELETE /api/v1/links/:id
// ** @access Private

// exports.deleteSuggestedLink = asyncHandler(async (req, res, next) => {
//   const link = await SuggestedLink.findById(req.params.id);

//   if (!link) {
//     return next(
//       new ErrorResponse(`Link not found with id of ${req.params.id}`, 404)
//     );
//   }

//   if (link.user.toString() !== req.user.id && req.user.role !== "admin") {
//     return next(
//       new ErrorResponse(
//         `User ${req.user.id} is not authorized to delet link ${link._id}`,
//         401
//       )
//     );
//   }

//   await link.remove();

//   res.status(201).json({
//     success: true,
//     data: {},
//   });
// });
