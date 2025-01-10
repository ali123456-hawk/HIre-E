// src/components/SignIn/SignIn.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from './SignIn.module.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const BASE_URL = 'http://192.168.3.166:8080/api/indv/UserLogin';

      const payload = { email, password };
      console.log("Request Payload:", payload);

      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.code === '00') {
        alert("Login successful!");
        navigate('/dashboard'); // Redirect to dashboard or appropriate page
      } else {
        setError("Login failed. Response code: " + data.code);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.authBackground}>
      <div className={styles.authContainer}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.errorMessage}>{error}</p>}

          <button type="submit" className={styles.primaryButton}>
            Sign In
          </button>

          <div className={styles.linkGroup}>
            <Link to="/signup" className={styles.linkButton}>
              Sign Up
            </Link>
            <Link to="/EmployeerSignIn" className={styles.linkButton}>
              For Employers
            </Link>
            <Link to="/jobs" className={styles.linkButton}>
              Browse Jobs
            </Link>
          </div>
        </form>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
