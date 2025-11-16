import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PLAN_DETAILS = {
  Free: { price: "$0 / month", label: "Free" },
  Pro: { price: "$19 / month", label: "Pro" },
  Elite: { price: "$49 / month", label: "Elite" }
};

const BillingPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("forcix_user");
    if (!stored) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, [navigate]);

  if (!user) return null;

  const planKey = user.currentPlan || "Free";
  const planInfo = PLAN_DETAILS[planKey] || PLAN_DETAILS.Free;

  const handleCheckout = () => {
    alert(
      `Currently online payment is unavailable.\n\nThis is a demo billing screen. Your plan "${planInfo.label}" is set in your account.`
    );
    navigate("/");
  };

  return (
    <section className="billing-page">
      <div className="billing-card">
        <h2>Billing Summary</h2>
        <p className="billing-sub">
          Review your details before completing checkout.
        </p>

        <div className="billing-row">
          <span className="billing-label">Name</span>
          <span className="billing-value">{user.name}</span>
        </div>

        <div className="billing-row">
          <span className="billing-label">Email</span>
          <span className="billing-value">{user.email}</span>
        </div>

        <div className="billing-row">
          <span className="billing-label">Selected Plan</span>
          <span className="billing-value">{planInfo.label}</span>
        </div>

        <div className="billing-row">
          <span className="billing-label">Price</span>
          <span className="billing-value">{planInfo.price}</span>
        </div>

        <p className="billing-note">
          ⚠️ Currently online payment is unavailable. This is a demo billing
          flow for the Forcix prototype.
        </p>

        <button className="btn-primary-lg billing-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </section>
  );
};

export default BillingPage;
