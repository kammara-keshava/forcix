import React from "react";

const Programs = () => {
  const programs = [
    {
      name: "Forcix Strength",
      level: "Intermediate",
      desc: "4-day split focused on compound lifts and progressive overload."
    },
    {
      name: "Forcix Shred",
      level: "Beginner–Intermediate",
      desc: "Fat-loss program blending weights with conditioning."
    },
    {
      name: "Forcix Hybrid",
      level: "Advanced",
      desc: "Strength + conditioning for athletes who want it all."
    }
  ];

  return (
    <section className="programs" id="programs">
      <h2>Signature Programs</h2>
      <div className="program-grid">
        {programs.map((p) => (
          <div className="program-card" key={p.name}>
            <h3>{p.name}</h3>
            <p className="program-level">{p.level}</p>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
