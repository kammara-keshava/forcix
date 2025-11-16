import React, { useState } from "react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter an email address.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/guide`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      alert("Starter guide request saved. Check your inbox soon!");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Could not send request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cta" id="cta">
      <h2>Ready to start your Forcix phase?</h2>
      <p className="cta-sub">
        Drop your email and we'll send you a starter guide, sample workouts,
        and the exact steps to set up your first 4-week block.
      </p>

      <form className="cta-form" onSubmit={handleSubmit}>
        <div className="cta-input-row">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="cta-input"
            required
          />
          <button type="submit" className="btn-primary-lg cta-btn" disabled={loading}>
            {loading ? "Saving..." : "Get Starter Guide"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CTA;
