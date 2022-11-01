const ErrorResponse = require("../utils/errorResponse");

// The idea is we can just call next(err) - nice and clean.

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //  ¯\_(ツ)_/¯
  // Log to console err.value?  start here to find this bug dammit.

  // if (err.name === "Error") {
  //   const message = "Not found";
  //   // this calls the ErrorResponse utility class
  //   error = new ErrorResponse(message, 404);
  // }

  // bad object id
  if (err.name === "CastError") {
    const message = `Resource ${err.value} not found`;
    error = new ErrorResponse(message, 404);
  }

  // duplicate field
  if (err.code === 11000) {
    const message = "Duplicate value entered";
    error = new ErrorResponse(message, 400);
  }

  // validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
