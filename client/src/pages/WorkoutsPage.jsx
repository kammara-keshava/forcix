// client/src/pages/WorkoutsPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";
const user = localStorage.getItem("forcix_user");


const WorkoutsPage = () => {
    
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        setLoading(true);
        setError("");

        // 🚨 Make sure this is EXACTLY 5001, NOT 3000
        const res = await fetch(`${API_BASE_URL}/api/workouts`);

        const contentType = res.headers.get("content-type") || "";

        // If server didn't send JSON, log what we actually got
        if (!contentType.includes("application/json")) {
          const text = await res.text();
          console.error("Non-JSON response from /api/workouts:", text);
          throw new Error("Server returned invalid response for workouts.");
        }

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to load workouts.");
        }

        setWorkouts(data.workouts || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  const handleStartWorkout = (id) => {
    navigate(`/workouts/${id}`);
  };

  return (
    <section className="workouts-page">
      <div className="workouts-header">
        <h1>
          Choose Your <span className="highlight">Perfect Workout</span>
        </h1>
        <p className="section-sub">
          Mix and match Forcix programs — from strength and conditioning to yoga
          and recovery — and build a weekly routine that actually fits your life.
        </p>
      </div>

      {loading && <p className="workouts-status">Loading workouts...</p>}
      {error && !loading && <p className="workouts-error">{error}</p>}

      <div className="workouts-grid">
        {!loading &&
          !error &&
          workouts.map((w) => (
            <div key={w._id} className="workout-card">
              <div className="workout-image-wrapper">
                <img src={w.imageUrl} alt={w.title} className="workout-image" />
                {w.tag && <span className="workout-tag">{w.tag}</span>}
              </div>

              <div className="workout-body">
                <h3 className="workout-title">{w.title}</h3>
                <p className="workout-desc">{w.description}</p>

                <div className="workout-meta">
                  <span>
                    {w.durationMin || 30}–{(w.durationMin || 30) + 15} min
                  </span>
                  <span className="workout-level">{w.level || "All Levels"}</span>
                </div>

                <button
                  className="workout-btn"
                  onClick={() => handleStartWorkout(w._id)}
                >
                  Start Workout
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default WorkoutsPage;
