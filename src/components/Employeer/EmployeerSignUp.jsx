import React from 'react';
import styles from './Auth.module.css';

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
      </form>
    </div>
  );
};

export default EmployeerSignUp;
