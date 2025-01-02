import React from 'react';
import styles from './Dashboard.module.css'; // Import the CSS module

function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>Hello, Amin!</h1>
      <div className={styles.nav}>
        <button className={styles.navButton}>Dashboard</button>
        <button className={styles.navButton}>Job Search</button>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Jobs Applied</span>
          <span className={styles.statValue}>14</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Applications Accepted</span>
          <span className={styles.statValue}>5</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Applications In Review</span>
          <span className={styles.statValue}>9</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.actionButton}>Edit Profile</button>
        <button className={styles.actionButton}>Log Out</button>
      </div>
    </div>
  );
}

export default Dashboard;