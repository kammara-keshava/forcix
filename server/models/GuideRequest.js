const mongoose = require("mongoose");

const guideRequestSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("GuideRequest", guideRequestSchema);
