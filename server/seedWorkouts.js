// server/seedWorkouts.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Workout = require("./models/Workout");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const workouts = [
  {
    title: "Cardio",
    category: "cardio",
    description: "Boost heart health and endurance with outdoor or treadmill cardio sessions.",
    durationMin: 20,
    level: "All Levels",
    tag: "High Energy",
    imageUrl: "https://res.cloudinary.com/dmi3gyqoo/image/upload/v1763289180/side-view-full-length-young-man-sportswear-running-treadmill-gym-muscular-young-man-blue-shorts-doing-exercises-motion-blur_rmjkqn.jpg",
    videoUrl: "https://res.cloudinary.com/dmi3gyqoo/video/upload/v1763289287/INTENSE_10_MINUTE_FAT_MELTING_HIIT_CARDIO_WORKOUT_10_SECOND_BREAKS_rrultf.mp4",
    equipment: ["Treadmill", "Running Shoes"],
    focusAreas: ["Heart", "Legs"],
    caloriesEstimate: 250,
  },
  {
    title: "Strength",
    category: "strength",
    description: "Build muscle and increase power with structured barbell and dumbbell splits.",
    durationMin: 45,
    level: "Intermediate",
    tag: "Strength",
    imageUrl: "https://8weeksout.com/wp-content/uploads/2017/04/How-to-train-strength-and-conditioning.jpg",
    videoUrl: "https://res.cloudinary.com/dmi3gyqoo/video/upload/v1763289757/BEST_Exercises_for_Runners_Strength_Training___Plyometrics___Power_Exercises_qxol1n.mp4",
    equipment: ["Barbell", "Dumbbells", "Bench"],
    focusAreas: ["Chest", "Back", "Legs"],
    caloriesEstimate: 400,
  },
  {
    title: "Yoga",
    category: "yoga",
    description: "Improve mobility, posture, and calm with guided yoga-inspired flows.",
    durationMin: 30,
    level: "All Levels",
    tag: "Recovery",
    imageUrl: "https://geimshospital.com/wp-content/uploads/2025/06/International-Yoga-Day-img.jpg",
    videoUrl: "https://res.cloudinary.com/dmi3gyqoo/video/upload/v1763290250/12_minute_morning_yoga_routine_for_beginners___Bupa_Health_xxd0ev.mp4",
    equipment: ["Yoga Mat"],
    focusAreas: ["Core", "Mobility"],
    caloriesEstimate: 150,
  },
  {
    title: "HIIT",
    category: "hiit",
    description: "Short, intense intervals for maximum fat-burn and conditioning in minimum time.",
    durationMin: 20,
    level: "Advanced",
    tag: "Intense",
    imageUrl: "https://res.cloudinary.com/dmi3gyqoo/image/upload/v1763289938/Screenshot_2025-11-16_at_4.15.30_PM_wxcydp.png",
    videoUrl: "https://res.cloudinary.com/dmi3gyqoo/video/upload/v1763290199/15_Min_Intense_HIIT_Workout_For_Fat_Burn_Cardio_No_Equipment_No_Repeats_u8ps0r.mp4",
    equipment: ["Bodyweight", "Timer"],
    focusAreas: ["Full Body"],
    caloriesEstimate: 300,
  },
  {
    title: "Cycling",
    category: "cycling",
    description: "Indoor and outdoor cycling programs tailored to your pace and power.",
    durationMin: 40,
    level: "All Levels",
    tag: "Endurance",
    imageUrl: "https://res.cloudinary.com/dmi3gyqoo/image/upload/v1763290014/Screenshot_2025-11-16_at_4.16.46_PM_jrejf1.png",
    videoUrl: "https://res.cloudinary.com/dmi3gyqoo/video/upload/v1763290123/12_years_of_cycling_training_advice_in_13_minutes_setvb7.mp4",
    equipment: ["Cycle", "Helmet"],
    focusAreas: ["Legs", "Cardio"],
    caloriesEstimate: 350,
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Mongo connected, seeding workouts...");

    await Workout.deleteMany({});
    await Workout.insertMany(workouts);

    console.log("Workouts seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
