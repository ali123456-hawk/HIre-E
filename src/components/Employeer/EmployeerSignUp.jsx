import React from 'react';
import styles from './Auth.module.css';
import { Link } from 'react-router-dom';


const EmployeerSignUp = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create a New Account</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Company Type" className={styles.input} />
        <input type="text" placeholder="Company Name" className={styles.input} />
        <input type="text" placeholder="Contact Person" className={styles.input} />
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="password" placeholder="Create Password" className={styles.input} />
        <input type="email" placeholder="Your Email" className={styles.input} />
        <input type="text" placeholder="Your Mobile #" className={styles.input} />
        <button type="submit" className={styles.button}>Register</button>
        <Link to="/signin">
                  <button type="button">Back</button>
      </Link>
      </form>
    </div>
  );
};

export default EmployeerSignUp;