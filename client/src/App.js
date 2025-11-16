import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
// import WorkoutsPage from "./pages/WorkoutsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BillingPage from "./pages/BillingPage";
import WorkoutsPage from "./pages/WorkoutsPage";
import WorkoutDetailPage from "./pages/WorkoutDetailPage";
import BmiCalculator from "./pages/BmiCalculator";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
    path="/workouts"
    element={
      <ProtectedRoute>
        <WorkoutsPage />
      </ProtectedRoute>
    }
  />

  <Route
    path="/workouts/:id"
    element={
      <ProtectedRoute>
        <WorkoutDetailPage />
      </ProtectedRoute>
    }
  />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/bmi" element={<BmiCalculator />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
