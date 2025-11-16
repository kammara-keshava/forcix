import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5001";

// PLANS
const plans = [
  {
    id: "Free",
    name: "Free",
    price: "$0 / month",
    badge: "Start Today",
    features: [
      "Access to basic workout library",
      "Up to 3 workouts / week tracking",
      "Basic streak tracking",
      "Community access",
    ],
  },
  {
    id: "Pro",
    name: "Pro",
    price: "$19 / month",
    badge: "Most Popular",
    features: [
      "Full workout library access",
      "Unlimited workout tracking",
      "Advanced streaks & achievements",
      "Training volume analytics",
      "Priority coach Q&A",
    ],
  },
  {
    id: "Elite",
    name: "Elite",
    price: "$49 / month",
    badge: "For Serious Lifters",
    features: [
      "Everything in Pro",
      "Custom training + nutrition plan",
      "1-on-1 coach sessions",
      "Form review video feedback",
      "Quarterly progress audits",
    ],
  },
];

const Pricing = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [loadingPlan, setLoadingPlan] = useState("");
  const [error, setError] = useState("");

  // Load user initially
  useEffect(() => {
    const stored = localStorage.getItem("forcix_user");
    if (stored) {
      const u = JSON.parse(stored);
      setUser(u);
      setCurrentPlan(u.currentPlan || null);
    }
  }, []);

  // UPDATE PLAN
  const handleSelectPlan = async (planId) => {
    setError("");

    if (!user) {
      navigate("/signup");
      return;
    }

    if (currentPlan === planId) return;

    try {
      setLoadingPlan(planId);

      const res = await fetch(`${API_BASE_URL}/api/subscription/set`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, plan: planId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Plan update failed.");
        setLoadingPlan("");
        return;
      }

      const updatedUser = data.user;

      // Save new plan
      localStorage.setItem("forcix_user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setCurrentPlan(updatedUser.currentPlan);

      // 🔥 Notify Navbar instantly (no refresh needed)
      window.dispatchEvent(new Event("forcix_user_updated"));

      // Go to billing page
      navigate("/billing");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoadingPlan("");
    }
  };

  return (
    <section className="pricing" id="pricing">
      <p className="section-tag">PLANS</p>
      <h2>
        Simple Pricing, <span className="highlight">Serious Results</span>
      </h2>
      <p className="section-sub">
        Start free, upgrade only when you're ready to go all-in on your training.
      </p>

      {error && <p className="pricing-error">{error}</p>}

      <div className="pricing-grid">
        {plans.map((plan) => {
          const isCurrent = currentPlan === plan.id;

          const btnLabel = !user
            ? "Sign Up to Start"
            : isCurrent
            ? "Your Current Plan"
            : plan.id === "Free"
            ? "Start Free"
            : "Get Started";

          return (
            <div
              key={plan.id}
              className={`pricing-card ${
                isCurrent ? "pricing-card-active" : ""
              }`}
            >
              <p className="plan-name">{plan.name}</p>
              <p className="plan-price">{plan.price}</p>

              <span className="plan-badge">{plan.badge}</span>

              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <button
                className="pricing-btn"
                onClick={() => handleSelectPlan(plan.id)}
                disabled={isCurrent || loadingPlan === plan.id}
              >
                {loadingPlan === plan.id ? "Updating..." : btnLabel}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
