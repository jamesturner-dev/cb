const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
    maxlength: 100,
  },
  text: {
    type: String,
    required: [true, "Please add a review"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, "Please add a rating between 1 and 10"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  market: {
    type: mongoose.Schema.ObjectId,
    ref: "Market",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

// Prevent user from submitting more than one review per market
ReviewSchema.index({ market: 1, user: 1 }, { unique: true });

// Static method to get avg rating and save
ReviewSchema.statics.getAverageRating = async function (marketId) {
  const obj = await this.aggregate([
    {
      $match: { market: marketId },
    },
    {
      $group: {
        _id: "$market",
        averageRating: { $avg: "$rating" },
      },
    },
  ]);

  try {
    await this.model("Market").findByIdAndUpdate(marketId, {
      averageRating: obj[0].averageRating,
    });
  } catch (err) {
    console.error(err);
  }
};

// Call getAverageRating after save
ReviewSchema.post("save", function () {
  this.constructor.getAverageRating(this.market);
});

// Call getAverageRating before remove
ReviewSchema.pre("remove", function () {
  this.constructor.getAverageRating(this.market);
});

module.exports = mongoose.model("Review", ReviewSchema);
