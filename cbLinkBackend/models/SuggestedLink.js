const mongoose = require("mongoose");

const SuggestedLinkSchema = new mongoose.Schema({
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
  tags: {
    type: [String],
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
      "politics",
      "people",
      "software",
      "other",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SuggestedLink", SuggestedLinkSchema);
