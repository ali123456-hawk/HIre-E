import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../JobSearch/JobList.module.css';
import { jobData } from '../JobSearch/JobData'; // Import job data

const JobList = () => {
  const { categoryName } = useParams(); // Get category from URL
  const jobs = jobData[categoryName] || []; // Fetch jobs for the selected category

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.backButton}>{"<back"}</Link>
        <h2>Jobs: {categoryName}</h2>
      </div>

      <input type="text" className={styles.searchBar} placeholder="search for job" />

      <div className={styles.featuredJobs}>
        <h3>Featured Jobs</h3>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index} className={styles.job}>
              <h4 className={styles.jobTitle}>{job.title}</h4>
              <p className={styles.jobDetails}>Apply By: {job.applyBy}</p>
              <p className={styles.jobDetails}>Company: {job.company}</p>
              <p className={styles.jobDetails}>Location: {job.location}</p>
            </div>
          ))
        ) : (
          <p>No jobs available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
