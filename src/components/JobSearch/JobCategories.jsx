import React from 'react';
import { Link } from 'react-router-dom';
import styles from './JobCategories.module.css';

const JobCategories = () => {
  const categories = [
    'Marketing',
    'Software & Web Development',
    'Project Management',
    'Human Resources',
    'Operations',
    'Media & Communications',
    'Sales & Business Development',
    'Accounts, Finance & Financial Services',
    'Client Services & Customer Support'
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.backButton}>{"<back"}</Link>
        <h2>Jobs by Category</h2>
      </div>

      <ul className={styles.categoryList}>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/jobs/${category}`} className={styles.categoryLink}>
              {category} <span className={styles.arrow}> &gt; </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobCategories;
