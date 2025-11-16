import React from "react";

const workouts = [
  {
    title: "Cardio",
    desc: "Boost heart health and endurance with high-energy outdoor or treadmill sessions.",
    duration: "20–45 min",
    level: "All Levels",
    tag: "🔥 High Energy",
    image:
      "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg"
  },
  {
    title: "Strength",
    desc: "Build muscle and increase power with structured resistance training splits.",
    duration: "30–60 min",
    level: "Intermediate",
    tag: "🏋️ Strength",
    image:
      "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg"
  },
  {
    title: "Yoga",
    desc: "Improve mobility, posture, and calm with guided yoga-inspired flows.",
    duration: "30–60 min",
    level: "All Levels",
    tag: "🧘 Recovery",
    image:
      "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg"
  },
  {
    title: "HIIT",
    desc: "Short, intense intervals for maximum fat-burn and conditioning in minimum time.",
    duration: "15–30 min",
    level: "Advanced",
    tag: "⚡ Intense",
    image:
      "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg"
  },
  {
    title: "Cycling",
    desc: "Indoor and outdoor cycling sessions tailored to your pace and power.",
    duration: "30–60 min",
    level: "All Levels",
    tag: "🚴 Endurance",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg"
  },
  {
    title: "Circuit Training",
    desc: "Full-body circuits combining strength and cardio for busy days.",
    duration: "25–45 min",
    level: "Intermediate",
    tag: "💪 Full Body",
    image:
      "https://images.pexels.com/photos/4162454/pexels-photo-4162454.jpeg"
  }
];

const Workouts = () => {
  return (
    <section className="workouts" id="workouts">
      <p className="section-tag">WORKOUT PROGRAMS</p>
      <h2>
        Choose Your <span className="gradient-text">Perfect Workout</span>
      </h2>
      <p className="section-sub">
        Mix and match Forcix programs — from strength and conditioning to yoga
        and recovery — and build a weekly routine that actually fits your life.
      </p>

      <div className="workout-grid">
        {workouts.map((w) => (
          <div className="workout-card" key={w.title}>
            <div className="workout-image-wrapper">
              <img src={w.image} alt={w.title} />
              <span className="workout-tag">{w.tag}</span>
            </div>
            <div className="workout-body">
              <h3>{w.title}</h3>
              <p className="workout-desc">{w.desc}</p>
              <div className="workout-meta">
                <span>{w.duration}</span>
                <span className="workout-level">{w.level}</span>
              </div>
              <button className="workout-btn">Start Workout</button>
            </div>
          </div>
        ))}
      </div>

      <div className="workout-cta-banner">
        <h3>Can&apos;t decide? Let us help!</h3>
        <p>
          Take a quick fitness quiz and we&apos;ll build a personalized Forcix
          plan with the right mix of strength, conditioning, and recovery.
        </p>
        <button className="btn-primary-lg">Get Personalized Plan</button>
      </div>
    </section>
  );
};

export default Workouts;
