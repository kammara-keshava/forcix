import React, { useEffect, useState } from "react";
import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  // Sync user from localStorage on mount + when custom event fires
  useEffect(() => {
    const syncUser = () => {
      const stored = localStorage.getItem("forcix_user");
      setUser(stored ? JSON.parse(stored) : null);
    };

    syncUser();
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // For About / Features / Pricing – always go to home then scroll
  const handleSectionClick = (sectionId) => {
    setShowProfile(false);

    if (location.pathname !== "/") {
      navigate("/");
      // small delay so home mounts, then scroll
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const navLinkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " nav-link-active" : "");

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
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>

        <button
          type="button"
          className="nav-link nav-link-button"
          onClick={() => handleSectionClick("about")}
        >
          About
        </button>

        <NavLink to="/workouts" className={navLinkClass}>
          Workouts
        </NavLink>

        <NavLink to="/bmi" className={navLinkClass}>
          BMI
        </NavLink>

        <button
          type="button"
          className="nav-link nav-link-button"
          onClick={() => handleSectionClick("pricing")}
        >
          Pricing
        </button>
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
