import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  // Sync user from localStorage on mount + when custom event fires
  useEffect(() => {
    const syncUser = () => {
      const stored = localStorage.getItem("forcix_user");
      setUser(stored ? JSON.parse(stored) : null);
    };

    syncUser(); // initial load

    // listen for "forcix_user_updated" fired from Pricing.jsx
    window.addEventListener("forcix_user_updated", syncUser);

    return () => {
      window.removeEventListener("forcix_user_updated", syncUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("forcix_user");
    localStorage.removeItem("forcix_token");
    setUser(null);
    navigate("/login");
  };

  const currentPlanLabel = user?.currentPlan || "No active plan";

  return (
    <header className="navbar">
      <div
        className="nav-left"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <div className="logo-pill">
          <span className="logo-icon">F</span>
        </div>
        <span className="nav-logo-text">Forcix</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <a href="#about">About</a>
        <NavLink to="/workouts">Workouts</NavLink>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </nav>

      <div className="nav-right">
        {user ? (
          <div className="nav-user-wrapper">
            <div
              className="nav-user-pill"
              onClick={() => setShowProfile((p) => !p)}
            >
              <span className="nav-user-initial">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </span>
              <span className="nav-user-name">{user.name}</span>
            </div>

            {showProfile && (
              <div className="nav-user-dropdown">
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Current Plan:</strong> {currentPlanLabel}
                </p>
              </div>
            )}

            <button className="nav-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button
            className="nav-login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
