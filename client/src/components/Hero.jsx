import React from "react";

const Hero = () => {
  // later you can replace this with a Cloudinary URL
  const heroImage =
    "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg";

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-pill">🔥 Your Fitness Journey Starts Here</div>
        <h1>
          Transform Your <span className="gradient-text">Body & Mind</span>
        </h1>
        <p className="hero-sub">
          Forcix combines structured strength training, smart tracking, and
          gamified goals so you don&apos;t just work out — you level up. Build
          streaks, unlock milestones, and hit your strongest version yet.
        </p>

        <div className="hero-actions">
  <button
    className="btn-primary-lg"
    onClick={() => {
      const el = document.getElementById("pricing");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.href = "/#pricing";
    }}
  >
    Get Started Free
  </button>

  <a
    className="btn-ghost"
    href="https://res.cloudinary.com/dmi3gyqoo/video/upload/v1763288530/NO_LIMITS_-_Gym_Motivation_twb17v.mp4"
    target="_blank"
    rel="noreferrer"
  >
    ▷ Watch Demo
  </a>
</div>


        <div className="hero-stats-row">
          <div className="hero-stat">
            <div className="hero-stat-label">Active Athletes</div>
            <div className="hero-stat-value">50K+</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">Workouts Logged</div>
            <div className="hero-stat-value">1M+</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-label">Goal Success</div>
            <div className="hero-stat-value">98%</div>
          </div>
        </div>
      </div>

      <div className="hero-media">
        <div className="hero-media-card">
          <img src={heroImage} alt="Athlete training" />
          <button className="hero-play-overlay">
            ▶
          </button>

          <div className="streak-card">
            <div className="streak-icon">🔥</div>
            <div className="streak-text">
              <p className="streak-label">Current Streak</p>
              <p className="streak-value">15 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
