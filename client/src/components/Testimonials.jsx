import React, { useState, useEffect } from "react";

const testimonialsData = [
  {
    name: "Aditya",
    quote:
      "Forcix helped me stay consistent for the first time in my life. The streaks and progress graphs keep me hooked."
  },
  {
    name: "Sneha",
    quote:
      "I lost 8 kg in 3 months while getting stronger. The plans are simple but brutally effective."
  },
  {
    name: "Rahul",
    quote:
      "The hybrid strength + conditioning program is insane. I feel fitter, faster, and stronger."
  },
  {
    name: "Meera",
    quote:
      "I love how the app tells me exactly what to do each day. No more overthinking my workouts."
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // auto-slide every 6 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonialsData[index];

  return (
    <section className="testimonials" id="testimonials">
      <p className="section-tag">RESULTS</p>
      <h2>Real People. Real Progress.</h2>

      <div className="testimonial-carousel">
        <button
          className="testimonial-nav-btn"
          onClick={() =>
            setIndex((prev) =>
              prev === 0 ? testimonialsData.length - 1 : prev - 1
            )
          }
        >
          ‹
        </button>

        <div className="testimonial-card active">
          <p className="quote">“{current.quote}”</p>
          <p className="name">— {current.name}</p>
        </div>

        <button
          className="testimonial-nav-btn"
          onClick={() =>
            setIndex((prev) => (prev + 1) % testimonialsData.length)
          }
        >
          ›
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
