const express = require("express");
const GuideRequest = require("../models/GuideRequest");

const router = express.Router();

// POST /api/guide
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    // Optional: avoid duplicates
    await GuideRequest.create({ email });

    res.status(201).json({ message: "Guide request saved." });
  } catch (err) {
    console.error("Guide request error:", err);
    res.status(500).json({ message: "Server error saving guide request." });
  }
});

module.exports = router;
