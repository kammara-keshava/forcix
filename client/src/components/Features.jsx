import React from "react";

const features = [
  {
    title: "Personalized Plans",
    desc: "Programs built around your goal: fat loss, muscle gain, or raw strength with clear progressions.",
  },
  {
    title: "Workout Tracker",
    desc: "Log sets, reps, and weights. Never forget what you lifted last session.",
  },
  {
    title: "Nutrition Guidance",
    desc: "Macro-friendly meals & habit goals that support your training without complexity.",
  },
  {
    title: "Coach Support",
    desc: "Optional 1-on-1 guidance, form feedback, and accountability inside the platform.",
  },
  {
    title: "Streaks & Rewards",
    desc: "Earn streaks, achievements, and badges that keep you motivated and consistent.",
  },
  {
    title: "Smart Insights",
    desc: "See weekly volume, recovery cues, and balance so you know when to push or deload.",
  },

  // ⭐ New Features
  {
    title: "Progress Photos",
    desc: "Track visual progress with weekly photos stored securely in your private dashboard.",
  },
  {
    title: "AI Form Analysis",
    desc: "Upload your lifts and let AI highlight mistakes and give instant improvement cues.",
  }
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <p className="section-tag">PLATFORM FEATURES</p>
      <h2>
        Precision Training for <span className="highlight">Everyday Athletes</span>
      </h2>

      <p className="section-sub">
        Forcix keeps you consistent with streaks, insights, and coach-driven guidance
        while giving you data that actually matters.
      </p>

      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
