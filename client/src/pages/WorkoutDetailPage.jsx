// client/src/pages/WorkoutDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

const WorkoutDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/workouts/${id}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to load workout.");
        }

        setWorkout(data.workout);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, [id]);

  if (loading) {
    return (
      <section className="workout-detail-page">
        <p className="workouts-status">Loading workout...</p>
      </section>
    );
  }

  if (error || !workout) {
    return (
      <section className="workout-detail-page">
        <p className="workouts-error">{error || "Workout not found."}</p>
        <button className="workout-btn" onClick={() => navigate("/workouts")}>
          Back to Workouts
        </button>
      </section>
    );
  }

  return (
    <section className="workout-detail-page">
      <button className="workout-back-btn" onClick={() => navigate("/workouts")}>
        ← Back to Workouts
      </button>

      <div className="workout-detail-layout">
        <div className="workout-detail-media">
          <div className="video-wrapper">
            <video
              src={workout.videoUrl}
              controls
              className="workout-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="workout-detail-info">
          <h1>{workout.title}</h1>
          <p className="workout-detail-desc">{workout.description}</p>

          <div className="workout-detail-meta">
            <span><strong>Level:</strong> {workout.level}</span>
            <span><strong>Duration:</strong> {workout.durationMin} min</span>
            {workout.caloriesEstimate ? (
              <span><strong>Calories:</strong> ~{workout.caloriesEstimate} kcal</span>
            ) : null}
          </div>

          {workout.equipment?.length > 0 && (
            <div className="workout-detail-section">
              <h3>Equipment</h3>
              <ul>
                {workout.equipment.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          )}

          {workout.focusAreas?.length > 0 && (
            <div className="workout-detail-section">
              <h3>Focus Areas</h3>
              <ul>
                {workout.focusAreas.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            className="workout-btn"
            onClick={() => alert("Workout started! (later we can track sessions here)")}
          >
            Start Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailPage;
