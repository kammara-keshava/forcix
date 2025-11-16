import React, { useState } from "react";
import "../App.css";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setMessage("Please enter both height and weight.");
      return;
    }

    const h = height / 100;
    const bmiValue = (weight / (h * h)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setMessage("You are underweight 🟡");
    else if (bmiValue < 24.9) setMessage("You have a healthy weight 🟢");
    else if (bmiValue < 29.9) setMessage("You are overweight 🟠");
    else setMessage("You are obese 🔴");
  };

  return (
    <section className="bmi-page">
      <h2 className="bmi-title">
        Calculate Your <span className="highlight">BMI</span>
      </h2>
      <p className="bmi-sub">
        Check your Body Mass Index and understand your health category.
      </p>

      {/* Horizontal Container */}
      <div className="bmi-flex">
        
        {/* LEFT: BMI Calculator */}
        <div className="bmi-card">
          <h3 className="bmi-card-title">BMI Calculator</h3>

          <div className="bmi-input-group">
            <label>Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 170"
            />
          </div>

          <div className="bmi-input-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 65"
            />
          </div>

          <button className="bmi-btn" onClick={calculateBMI}>
            Calculate BMI
          </button>

          {bmi && (
            <div className="bmi-result">
              <p>Your BMI: <strong>{bmi}</strong></p>
              <p>{message}</p>
            </div>
          )}
        </div>

        {/* RIGHT: BMI Classification Table */}
        <div className="bmi-table-box">
          <h3 className="bmi-card-title">BMI Classification</h3>

          <div className="bmi-table">
            <div className="bmi-row header">
              <span>Category</span>
              <span>BMI Range</span>
            </div>

            <div className="bmi-row">
              <span>Underweight</span>
              <span>&lt; 18.5</span>
            </div>

            <div className="bmi-row">
              <span>Normal / Healthy</span>
              <span>18.5 – 24.9</span>
            </div>

            <div className="bmi-row">
              <span>Overweight</span>
              <span>25 – 29.9</span>
            </div>

            <div className="bmi-row">
              <span>Obese</span>
              <span>30+</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BmiCalculator;
