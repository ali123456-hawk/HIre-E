import React from 'react';
import styles from './JobSearch.module.css'; // Import the CSS module

function JobSearch() {
  return (
    <div className={styles.container}>
      <h1>Hello, Amin!</h1>
      <div className={styles.nav}>
        <button className={styles.navButton}>Dashboard</button>
        <button className={styles.navButton}>Job Search</button>
      </div>
      <div className={styles.filters}>
      <div className={styles.filter}>
          <span>All Jobs</span>
          <span>&gt;</span>
        </div>
      
        <div className={styles.filter}>
          <span>Jobs by Category</span>
          <span>&gt;</span>
        </div>
        <div className={styles.filter}>
          <span>Jobs by City</span>
          <span>&gt;</span>
        </div>
        <div className={styles.filter}>
          <span>Jobs by Company</span>
          <span>&gt;</span>
        </div>
      </div>
    </div>
  );
}

export default JobSearch;