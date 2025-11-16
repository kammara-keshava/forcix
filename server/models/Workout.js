// server/models/Workout.js
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "general" }, // strength, cardio, yoga, hiit...
    description: { type: String, required: true },
    durationMin: { type: Number, default: 30 },      // average duration
    level: { type: String, default: "All Levels" },  // Beginner | Intermediate | Advanced | All Levels
    tag: { type: String, default: "" },              // small chip, e.g. "High Energy"
    imageUrl: { type: String, required: true },      // Cloudinary image URL
    videoUrl: { type: String, required: true },      // Cloudinary video URL
    equipment: [{ type: String }],
    focusAreas: [{ type: String }],
    caloriesEstimate: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
