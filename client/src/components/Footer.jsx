import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo-pill">
            <span className="logo-icon">F</span>
          </div>
          <span className="nav-logo-text">Forcix</span>
          <p className="footer-desc">
            Transform your fitness journey with structured strength training,
            smart tracking, and a community that actually cares.
          </p>
          <div className="footer-socials">
            <span>🐦</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#workouts">Workouts</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#pricing">Affiliates</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#pricing">FAQ</a>
            <a href="#pricing">Success Stories</a>
            <a href="#pricing">Blog</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#pricing">Privacy</a>
            <a href="#pricing">Terms</a>
            <a href="#pricing">Cookies</a>
          </div>
        </div>
      </div>

      <div className="footer-contact-row">
        <div>
          <span className="footer-contact-label">Email</span>
          <p>support@forcix.fit</p>
        </div>
        <div>
          <span className="footer-contact-label">Phone</span>
          <p>+91-98765-43210</p>
        </div>
        <div>
          <span className="footer-contact-label">Location</span>
          <p>Hyderabad, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Forcix. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
