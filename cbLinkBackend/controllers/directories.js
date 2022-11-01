const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Directory = require("../models/Directory");
const path = require("path");

// ** @desc   Get 10 directories
// ** @route  GET /api/v1/directories
// ** @access Public
exports.getDirs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
  //   let dirs = await Directory.findMany().limit(10);
});

// ** @desc   Get single directory
// ** @route  GET /api/v1/directories/:id
// ** @access Public
exports.getDirectory = asyncHandler(async (req, res, next) => {
  const directory = await Directory.findById(req.params.id);

  if (!directory) {
    return next(new ErrorResponse("Directory is required", 400));
  }

  res.status(200).json({
    success: true,
    data: directory,
  });
});

// ** @desc create directory
// ** @route  POST /api/v1/directories/
// ** @access Private
exports.createDir = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  const publishedDirectory = await Directory.findOne({ user: req.user.id });

  if (publishedDirectory && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has already published a directory`,
        400
      )
    );
  }

  const directory = await Directory.create(req.body);
  res.status(201).json({
    success: true,
    data: directory,
  });
});

// ** @desc Update directory
// ** @route  PUT /api/v1/directories/:id
// ** @access Private
exports.updateDirectory = asyncHandler(async (req, res, next) => {
  let directory = await Directory.findById(req.params.id);

  if (!directory) {
    return next(new ErrorResponse("Directory is required", 400));
  }

  if (directory.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this directory`,
        401
      )
    );
  }

  directory = await Directory.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: directory,
  });
});

// ** @desc Delte directory
// ** @route DELETE /api/v1/directories/:id
// ** @access Private
exports.deleteDirectory = asyncHandler(async (req, res, next) => {
  const directory = await Directory.findById(req.params.id);
  if (!directory) {
    return res.status(400).json({
      success: false,
    });
  }

  if (directory.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete this directory`,
        401
      )
    );
  }

  directory.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// ** @desc Upload Photo
// ** @route PUT /api/v1/directories/:id/photo
// ** @access Private
exports.directoryPhotoUpload = asyncHandler(async (req, res, next) => {
  const directory = await Directory.findById(req.params.id);

  if (!directory) {
    return next(new ErrorResponse("Directory not found", 404));
  }

  if (directory.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this directory`,
        401
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse("Upload a file?", 400));
  }

  const file = req.files.file;

  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse("Please upload an image", 400));
  }

  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `image must be less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  file.name = `photo_${directory._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse("Problem with file upload", 500));
    }

    await Directory.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
