const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  longUrl: {
    type: String,
    match: [
      /^((http|https|ftp):\/\/)?(www.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
      "Please use a valid URL with HTTP or HTTPS",
    ],
  },
  shortUrl: {
    type: String,
    required: [true, "Please add a short URL"],
  },
  clicks: {
    type: Number,
    required: [true, "How many clicks?"],
    default: 0,
  },
  rating: {
    type: Number,
    required: [true, "What is the rating?"],
    default: 1,
  },
  related: {
    type: [String],
  },
  similar: {
    type: [String],
  },
  tags: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    enum: [
      "technology",
      "crypto",
      "blog",
      "electronics",
      "podcast",
      "music",
      "art",
      "offline",
      "video",
      "business",
      "food",
      "media",
      "news",
      "sports",
      "services",
      "travel",
      "social",
      "other",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  directory: {
    type: mongoose.Schema.ObjectId,
    ref: "Directory",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Link", LinkSchema);
// const autoIncrement = require("mongoose-auto-increment");
// LinkSchema.plugin(autoIncrement.plugin, {
//   model: "Link",
//   field: "cb",
//   startAt: 1,
// });
