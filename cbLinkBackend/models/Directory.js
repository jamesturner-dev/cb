const mongoose = require("mongoose");
const slugify = require("slugify");

const DirectorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
    },

    slug: String,

    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [500, "Description can not be more than 500 characters"],
    },

    photo: {
      type: String,
      default: "no-photo.jpg",
    },

    tags: {
      type: [String],
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },

  // https://mongoosejs.com/docs/guide.html#virtuals
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

DirectorySchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
}),
  DirectorySchema.pre("remove", async function (next) {
    console.log(`Deleting Links associated with ${this._id}`);
    await this.model("Link").deleteMany({ directory: this._id });
    next();
  });

// REVERSER POPULATE?  -  https://mongoosejs.com/docs/populate.html
DirectorySchema.virtual("link", {
  ref: "Link",
  localField: "_id",
  foreignField: "directory",
  justOne: false,
});

module.exports = mongoose.model("Directory", DirectorySchema);
