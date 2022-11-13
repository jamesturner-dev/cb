const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Counter = require("../models/Counter");

// ** @desc   Get link count
// ** @route  GET /api/v1/count
// ** @access Public
exports.getLinkCount = asyncHandler(async (req, res, next) => {
  const counter = await Counter.findById("635a98d4b233907564ff06ae");
  console.log(counter);

  if (!counter) {
    return next(new ErrorResponse("Counter Not Found", 400));
  }

  let { count } = counter;
  count += 1;

  res.status(200).json({
    success: true,
    data: count,
  });
});
