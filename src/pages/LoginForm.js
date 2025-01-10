import React, { useState } from "react";
import "../style/signup.css";

function LoginForm() {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formType === "signup" &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match!");
      return;
    }
    alert(`${formType === "login" ? "Logged in" : "Signed up"} successfully!`);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{formType === "login" ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="input"
          />
          {formType === "signup" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="input"
            />
          )}
          <button type="submit" className="button">
            {formType === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="toggle-text">
          {formType === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={() =>
              setFormType(formType === "login" ? "signup" : "login")
            }
            className="toggle-link"
          >
            {formType === "login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
