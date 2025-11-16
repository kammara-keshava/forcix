import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5001";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed.");
        setLoading(false);
        return;
      }

      // save token & user
      localStorage.setItem("forcix_token", data.token);
      localStorage.setItem("forcix_user", JSON.stringify(data.user));

            alert("Login successful!");
      // full reload so Navbar re-reads localStorage and shows username
      window.location.href = "/";

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
        <h2>Welcome Back</h2>
        <p className="auth-sub">
          Sign in to continue your Forcix journey and pick up where you left off.
        </p>

        {error && <p style={{ color: "#ff8b8b", fontSize: "0.85rem", marginBottom: "0.6rem" }}>{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
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
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <div className="auth-row">
            <label className="auth-remember">
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" className="auth-link-btn">
              Forgot password?
            </button>
          </div>

          <button className="btn-primary-lg auth-submit" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="auth-footer-text">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="auth-link">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
