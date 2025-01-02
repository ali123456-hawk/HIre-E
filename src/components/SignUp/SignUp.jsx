import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from './SignUp.module.css'; // Importing the CSS module

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating sign-up validation (replace with actual API logic)
    if (email && password) {
      // You can add the actual API call for sign-up here
      navigate("/signin");  // Redirect to the sign-in page after successful sign-up
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div className={styles.authBackground}>
      <div className={styles.authContainer}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          
          <div className={styles.inputGroup}>
            <label>FirstName</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>LastName</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>UserName</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Create Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Your Email</label>
            <input
              type="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Your Mobile#</label>
            <input
              type="number"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          

          {error && <p className={styles.errorMessage}>{error}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </div>
    </div>
  );
};

export default SignUp;
