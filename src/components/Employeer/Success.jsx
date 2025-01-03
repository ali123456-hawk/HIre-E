import React from 'react';
import styles from './Auth.module.css';

const Success = () => {
  return (
    <div className={styles.container}>
      <div className={styles.successBox}>
        <h2>🎉 Congratulations!</h2>
        <p>Please login to continue</p>
        <button className={styles.button}>Login</button>
      </div>
    </div>
  );
};

export default Success;
