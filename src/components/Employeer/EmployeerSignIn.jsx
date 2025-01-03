import React, { useState } from 'react';
import styles from './Auth.module.css';

const EmployeerSignIn = () => {
  const [activeTab, setActiveTab] = useState('signin'); // State to manage active tab

  return (
    <div className={styles.container}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'signin' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('signin')}
        >
          SIGN IN
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'register' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('register')}
        >
          REGISTER
        </button>
      </div>

      {/* Content */}
      {activeTab === 'signin' ? (
        <div>
          <h2 className={styles.title}>Welcome Employer!</h2>
          <form className={styles.form}>
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default EmployeerSignIn;
