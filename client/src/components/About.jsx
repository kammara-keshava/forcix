import React from "react";

const About = () => {
  const aboutImage =
    "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg";

  return (
    <section className="about" id="about">
      <div className="about-image-wrapper">
        <img src={aboutImage} alt="Dumbbells in gym" />
      </div>

      <div className="about-content">
        <p className="section-tag">ABOUT FORCIX</p>
        <h2>
          Transform Fitness Into An{" "}
          <span className="gradient-text">Everyday Challenge</span>
        </h2>
        <p className="about-text">
          At Forcix, we&apos;re on a mission to make consistency easier than
          quitting. We mix proven strength training principles with gamified
          streaks, milestones, and rewards — so you stay hooked, not burned out.
        </p>
        <p className="about-text">
          Whether you&apos;re a beginner or already lifting heavy, Forcix adapts
          to your level and pushes you just enough to keep your progress moving
          forward.
        </p>

        <div className="about-stats">
          <div className="about-stat-card">
            <span className="about-stat-number">5+</span>
            <span className="about-stat-label">Years Experience</span>
          </div>
          <div className="about-stat-card">
            <span className="about-stat-number">100+</span>
            <span className="about-stat-label">Programs & Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
