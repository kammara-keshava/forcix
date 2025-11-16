const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();

const authRoutes = require("./routes/auth");
const subscriptionRoutes = require("./routes/subscription");
const guideRoutes = require("./routes/guide");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("Mongo connection error:", err);
    process.exit(1);
  });

const workoutRoutes = require("./routes/workoutRoutes");
app.use("/api/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Forcix API is running 💪" });
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/guide", guideRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


