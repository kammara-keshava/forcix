// server/routes/workoutRoutes.js
const express = require("express");
const Workout = require("../models/Workout");

const router = express.Router();

// GET /api/workouts  -> list all workouts
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: 1 });
    res.json({ workouts });
  } catch (err) {
    console.error("Error fetching workouts:", err);
    res.status(500).json({ message: "Failed to load workouts." });
  }
});

// GET /api/workouts/:id  -> single workout
router.get("/:id", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found." });
    }
    res.json({ workout });
  } catch (err) {
    console.error("Error fetching workout:", err);
    res.status(500).json({ message: "Failed to load workout." });
  }
});

module.exports = router;
