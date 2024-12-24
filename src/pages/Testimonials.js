import React from "react";
import "../style/Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonial-header">
        <h2>What Our Happy Clients Say About Us</h2>
        <div className="ratings">
          <div className="rating-score">4.9 (450 Reviews)</div>
        </div>
      </div>

      <div className="testimonial-content">
        <div className="testimonial-box">
          <h3>Farhan Rio</h3>
          <p>Happy Customer</p>
          <div className="stars"></div>
          <p className="review">Good Gym love it.</p>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Why Us</p>
          <p>Security</p>
          <p>Partnership</p>
        </div>
        <div className="footer-section">
          <h4>Categories</h4>
          <p>Basic Yoga</p>
          <p>Strength Training</p>
          <p>Body Building</p>
          <p>Weight Loss</p>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <p>Account</p>
          <p>Support Center</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>9864832535</p>
          <p>nepalnischal7@email.com</p>
          <p>Nepal,Kathmandu</p>
        </div>
        <div className="footer-section newsletter">
          <h4>Subscribe Our Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
