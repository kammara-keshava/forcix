import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed.");
        setLoading(false);
        return;
      }

      // store token if you want
      localStorage.setItem("forcix_token", data.token);
      localStorage.setItem("forcix_user", JSON.stringify(data.user));

            alert("Signup successful! You can now log in.");
      // full reload to keep behavior consistent
      window.location.href = "/login";

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Create your Forcix account</h2>
        <p className="auth-sub">
          Build streaks, track progress, and unlock your strongest self.
        </p>

        {error && <p style={{ color: "#ff8b8b", fontSize: "0.85rem", marginBottom: "0.6rem" }}>{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Confirm Password
            <input
              name="confirmPassword"
              type="password"
              placeholder="Repeat password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>

          <button className="btn-primary-lg auth-submit" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="auth-footer-text">
          Already have an account?{" "}
          <a href="/login" className="auth-link">
            Log In
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;
