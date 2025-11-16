const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Set current plan for a user
// POST /api/subscription/set
router.post("/set", async (req, res) => {
  try {
    const { userId, plan } = req.body;

    if (!userId || !plan) {
      return res.status(400).json({ message: "userId and plan are required." });
    }

    const allowedPlans = ["Free", "Pro", "Elite"];
    if (!allowedPlans.includes(plan)) {
      return res.status(400).json({ message: "Invalid plan type." });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { currentPlan: plan },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json({
      message: "Plan updated successfully.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        currentPlan: user.currentPlan
      }
    });
  } catch (err) {
    console.error("Subscription error:", err);
    res.status(500).json({ message: "Server error updating plan." });
  }
});

// Get current plan for a user
// GET /api/subscription/:userId
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json({
      currentPlan: user.currentPlan || null
    });
  } catch (err) {
    console.error("Get plan error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
