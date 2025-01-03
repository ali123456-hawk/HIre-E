import React from "react";
import styles from "./Dashboard.module.css";

const EmployeerDashboard = () => {
  return (
    <div className={styles.EmployeerDashboard}>
      <div className={styles.header}>
        <button className={styles.navButton}>←</button>
        <h1>Hello, BAFL!</h1>
        <button className={styles.navButton}>↻</button>
      </div>
      <div className={styles.tabs}>
        <button className={styles.tab}>Job Postings</button>
        <button className={styles.tab}>Applications</button>
      </div>
      <div className={styles.circle}>
        <h2>08</h2>
        <p>Total Positions Posted</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <p>Positions Vacant</p>
          <span>5</span>
        </div>
        <div className={styles.stat}>
          <p>Positions Filled</p>
          <span>3</span>
        </div>
      </div>
      <button className={styles.postJobButton}>Post a New Job</button>
    </div>
  );
};

export default EmployeerDashboard;