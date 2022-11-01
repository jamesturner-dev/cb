const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Counter = require("../models/Counter");

// ** @desc   Get single directory
// ** @route  GET /api/v1/directories/:id
// ** @access Public
exports.getCount = asyncHandler(async (req, res, next) => {
  const counter = await Counter.findById("635a98d4b233907564ff06ae");
  console.log(counter);

  if (!counter) {
    return next(new ErrorResponse("Counter Not Found", 400));
  }

  let { count } = counter;

  c = count + 1;

  res.status(200).json({
    success: true,
    data: c,
  });
});
