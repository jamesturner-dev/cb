const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Link = require("../models/Link");
const Directory = require("../models/Directory");
const getCount = require("../utils/linkCount");
const getShortURL = require ("../utils/shortUrl");

// ** @desc   Get all links
// ** @route  GET /api/v1/links
// ** @route  GET /api/v1/directories/:linkId/links
// ** @access Public
exports.getLinks = asyncHandler(async (req, res, next) => {
  if (req.params.linkId) {
    const links = await Link.find({ directory: req.params.linkId });
    return res.status(200).json({
      success: true,
      count: links.length,
      data: links,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// ** @desc   Get single link
// ** @route  GET /api/v1/links:shortUrl
// ** @access Public
exports.getLink = asyncHandler(async (req, res, next) => {
  const link = await Link.find({ shortUrl: req.params.shortUrl });
  console.log(req.params.shortUrl);
  if (!link) {
    return next(
      new ErrorResponse(`Link not found with id of ${req.params.shortUrl}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: link,
  });
});

// ** @desc   Create new link
// ** @route  POST /api/v1/directories/:DirectoryId/links
// ** @access Private

exports.addLink = asyncHandler(async (req, res, next) => {
  const count = await getCount();
  if (!count) {
    return next(new ErrorResponse("Could not retrieve previous count", 404));
  }

  const shortURL = await getShortURL(count);
  if (!shortURL) {
    return next(
      new ErrorResponse(`Could not create shortUrl with ${count}`, 404)
    );
  }

  req.body.shortUrl = shortURL;
  req.body.directory = req.params.directoryId;
  req.body.user = req.user.id;
  req.body.rating = Math.floor(Math.random() * 10);
  req.body.clicks = 1;

  const directory = await Directory.findById(req.params.directoryId);

  if (!directory) {
    return next(
      new ErrorResponse(
        `Directory not found with id of ${req.params.directoryId}`,
        404
      )
    );
  }

  if (directory.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to add an link to  ${directory._id}`,
        401
      )
    );
  }

  const link = await Link.create(req.body);

  res.status(201).json({
    success: true,
    newCount: count,
    data: link,
  });
});

// ** @desc   Update link
// ** @route  PUT /api/v1/links/:id
// ** @access Private

exports.updateLink = asyncHandler(async (req, res, next) => {
  let link = await Link.findById(req.params.id);

  if (!link) {
    return next(
      new ErrorResponse(`Link not found with id of ${req.params.id}`, 404)
    );
  }

  if (link.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update link ${link._id}`,
        401
      )
    );
  }

  link = await Link.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    data: link,
  });
});

// ** @desc   delete link
// ** @route  DELETE /api/v1/links/:id
// ** @access Private

exports.deleteLink = asyncHandler(async (req, res, next) => {
  const link = await Link.findById(req.params.id);

  if (!link) {
    return next(
      new ErrorResponse(`Link not found with id of ${req.params.id}`, 404)
    );
  }

  if (link.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delet link ${link._id}`,
        401
      )
    );
  }

  await link.remove();

  res.status(201).json({
    success: true,
    data: {},
  });
});
