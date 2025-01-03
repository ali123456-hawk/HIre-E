
import React, { useState } from "react";
import { FaSearch, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Position.module.css";

const Position = () => {
  const [filter, setFilter] = useState("All");

  const jobs = [
    { title: "Product Manager", applyBy: "26th March, 2025", location: "Karachi", status: "Vacant" },
    { title: "Admin Support", applyBy: "30th April, 2025", location: "Lahore", status: "Vacant" },
    { title: "Full Stack Developer", applyBy: "2nd February, 2024", location: "Islamabad", status: "Vacant" },
    { title: "Portfolio Manager", applyBy: "3rd April, 2024", location: "Karachi", status: "Vacant" },
    { title: "Digital Marketing Manager", applyBy: "10th March, 2024", location: "Karachi", status: "Vacant" },
    { title: "Marketing Executive", applyBy: "12th March, 2024", location: "Islamabad", status: "Filled" },
    { title: "Head Digital Products", applyBy: "1st June, 2024", location: "Peshawar", status: "Filled" },
    { title: "Chief Digital Officer", applyBy: "22nd April, 2024", location: "Karachi", status: "Filled" },
  ];

  const filteredJobs = jobs.filter((job) => filter === "All" || job.status === filter);

  return (
    <div className={styles.position}>
      <header className={styles.header}>
        <h1>Positions Posted</h1>
        <div className={styles.searchBar}>
          <FaSearch />
          <input type="text" placeholder="Search for a job..." />
        </div>
        <div className={styles.filters}>
          <label>
            <input
              type="radio"
              name="filter"
              value="All"
              checked={filter === "All"}
              onChange={(e) => setFilter(e.target.value)}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="Vacant"
              checked={filter === "Vacant"}
              onChange={(e) => setFilter(e.target.value)}
            />
            Vacant
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="Filled"
              checked={filter === "Filled"}
              onChange={(e) => setFilter(e.target.value)}
            />
            Filled
          </label>
        </div>
      </header>
      <ul className={styles.jobList}>
        {filteredJobs.map((job, index) => (
          <li key={index} className={styles.jobItem}>
            <div className={styles.jobDetails}>
              <h2>{job.title}</h2>
              <p>Apply By: {job.applyBy}</p>
              <p>Location: {job.location}</p>
            </div>
            {job.status === "Vacant" ? (
              <FaCheckCircle className={`${styles.icon} ${styles.vacant}`} />
            ) : (
              <FaExternalLinkAlt className={`${styles.icon} ${styles.filled}`} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Position;
