import React from "react";
import styles from "./MultiStepForm.module.css";// Importing the CSS module


const MultiStepForm = () => {
  return (
    <div className={styles.fullPageContainer}>
      <div className={styles.card}>
        <h1>Create a New Account</h1>
        <form className={styles.form}>
          {/* Step 1: Personal Information */}
          <div className={styles.section}>
            <h2>Step 1: Personal Information</h2>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="date" placeholder="Date of Birth" />
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" name="gender" value="Male" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" /> Other
              </label>
            </div>
            <input type="text" placeholder="Province" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="CNIC" />
            <input type="text" placeholder="Phone No" />
            <input type="email" placeholder="Email ID" />
          </div>

          {/* Step 2: Qualifications */}
          <div className={styles.section}>
            <h2>Step 2: Qualifications</h2>
            <input type="text" placeholder="Education Level" />
            <input type="text" placeholder="Degree Title" />
            <input type="text" placeholder="Institute Name" />
            <input type="date" placeholder="Start Date" />
            <input type="date" placeholder="Completion Date" />
            <input type="text" placeholder="Percentage/CGPA" />
            {/* <button type="button" className={styles.addMoreBtn}>
              + Add More
            </button> */}
          </div>

          {/* Step 3: Employment Details */}
          <div className={styles.section}>
            <h2>Step 3: Employment Details</h2>
            <input type="text" placeholder="Current Status" />
            <input type="text" placeholder="Total Experience" />
            <input type="text" placeholder="Current Position" />
          </div>

          {/* Step 4: Work Experience */}
          <div className={styles.section}>
            <h2>Step 4: Work Experience</h2>
            <input type="text" placeholder="Job Title" />
            <input type="text" placeholder="Company Name" />
            <input type="date" placeholder="Start Date" />
            <input type="date" placeholder="End Date" />
            <div>
              <label>
                <input type="checkbox" /> Currently Working Here
              </label>
            </div>
            {/* <button type="button" className={styles.addMoreBtn}>
              + Add More
            </button> */}
          </div>

          {/* Step 5: Area of Expertise */}
          <div className={styles.section}>
            <h2>Step 5: Area of Expertise</h2>
            <input type="text" placeholder="For example: Accounts, Web Development" />
            {/* <button type="button" className={styles.addMoreBtn}>
              + Add More
            </button> */}
          </div>

          {/* Step 6: Setup Credentials */}
          <div className={styles.section}>
            <h2>Step 6: Setup Credentials</h2>
            <input type="email" placeholder="Email ID" />
            <input type="password" placeholder="Password" />
          </div>

          {/* Submit Button */}
          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitBtn}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
