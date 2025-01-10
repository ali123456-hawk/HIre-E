// import React from "react";
// import styles from "./MultiStepForm.module.css";// Importing the CSS module


// const MultiStepForm = () => {
//   return (
//     <div className={styles.fullPageContainer}>
//       <div className={styles.card}>
//         <h1>Create a New Account</h1>
//         <form className={styles.form}>
//           {/* Step 1: Personal Information */}
//           <div className={styles.section}>
//             <h2>Step 1: Personal Information</h2>
//             <input type="text" placeholder="First Name" />
//             <input type="text" placeholder="Last Name" />
//             <input type="date" placeholder="Date of Birth" />
//             <div className={styles.radioGroup}>
//               <label>
//                 <input type="radio" name="gender" value="Male" /> Male
//               </label>
//               <label>
//                 <input type="radio" name="gender" value="Female" /> Female
//               </label>
//               <label>
//                 <input type="radio" name="gender" value="Other" /> Other
//               </label>
//             </div>
//             <input type="text" placeholder="Province" />
//             <input type="text" placeholder="City" />
//             <input type="text" placeholder="CNIC" />
//             <input type="text" placeholder="Phone No" />
//             <input type="email" placeholder="Email ID" />
//           </div>

//           {/* Step 2: Qualifications */}
//           <div className={styles.section}>
//             <h2>Step 2: Qualifications</h2>
//             <input type="text" placeholder="Education Level" />
//             <input type="text" placeholder="Degree Title" />
//             <input type="text" placeholder="Institute Name" />
//             <input type="date" placeholder="Start Date" />
//             <input type="date" placeholder="Completion Date" />
//             <input type="text" placeholder="Percentage/CGPA" />
//             {/* <button type="button" className={styles.addMoreBtn}>
//               + Add More
//             </button> */}
//           </div>

//           {/* Step 3: Employment Details */}
//           <div className={styles.section}>
//             <h2>Step 3: Employment Details</h2>
//             <input type="text" placeholder="Current Status" />
//             <input type="text" placeholder="Total Experience" />
//             <input type="text" placeholder="Current Position" />
//           </div>

//           {/* Step 4: Work Experience */}
//           <div className={styles.section}>
//             <h2>Step 4: Work Experience</h2>
//             <input type="text" placeholder="Job Title" />
//             <input type="text" placeholder="Company Name" />
//             <input type="date" placeholder="Start Date" />
//             <input type="date" placeholder="End Date" />
//             <div>
//               <label>
//                 <input type="checkbox" /> Currently Working Here
//               </label>
//             </div>
//             {/* <button type="button" className={styles.addMoreBtn}>
//               + Add More
//             </button> */}
//           </div>

//           {/* Step 5: Area of Expertise */}
//           <div className={styles.section}>
//             <h2>Step 5: Area of Expertise</h2>
//             <input type="text" placeholder="For example: Accounts, Web Development" />
//             {/* <button type="button" className={styles.addMoreBtn}>
//               + Add More
//             </button> */}
//           </div>

//           {/* Step 6: Setup Credentials */}
//           <div className={styles.section}>
//             <h2>Step 6: Setup Credentials</h2>
//             <input type="email" placeholder="Email ID" />
//             <input type="password" placeholder="Password" />
//           </div>

//           {/* Submit Button */}
//           <div className={styles.submitContainer}>
//             <button type="submit" className={styles.submitBtn}>
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { individualOnboarding } from "../../services/onboardingService";
import "./MultiStepForm.css"; // Ensure you link the CSS file correctly

const MultiStepForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    province: "",
    city: "",
    cnic: "",
    phoneNo: "",
    email: "",
    educationLevel: "",
    degreeTitle: "",
    instituteName: "",
    startDate: "",
    completionDate: "",
    cgpa: 0,
    currentStatus: "",
    totalExperience: 0,
    currentPosition: "",
    jobExperiences: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const BASE_URL = 'http://192.168.3.166:8080/api/indv/IndividualOnboarding';
      console.log("Request Payload:", formData);
      const response = await individualOnboarding(formData,BASE_URL);
      console.log("API Response:", response);
      if (response.code === '00') {
        alert("Onboarding successful!");
        navigate('/signin'); // Redirect to SignIn page

      }  else {
        alert("Onboarding failed. Response code: " + response.code);
      }
    } catch (error) {
      console.error("Error:", error);

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fullPageContainer">
      <div className="card">
        <h1>Multi-Step Onboarding Form</h1>
        <form onSubmit={handleSubmit} className="form">
          {/* Personal Information Section */}
          <div className="section">
            <h2>Personal Information</h2>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              placeholder="Province"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              placeholder="CNIC"
              required
            />
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          {/* Education Section */}
          <div className="section">
            <h2>Education</h2>
            <input
              type="text"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              placeholder="Education Level"
              required
            />
            <input
              type="text"
              name="degreeTitle"
              value={formData.degreeTitle}
              onChange={handleChange}
              placeholder="Degree Title"
              required
            />
            <input
              type="text"
              name="instituteName"
              value={formData.instituteName}
              onChange={handleChange}
              placeholder="Institute Name"
              required
            />
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              placeholder="Start Date"
              required
            />
            <input
              type="date"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleChange}
              placeholder="Completion Date"
              required
            />
            <input
              type="number"
              step="0.01"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              placeholder="CGPA"
              required
            />
          </div>

          {/* Employment Section */}
          <div className="section">
            <h2>Employment Details</h2>
            <input
              type="text"
              name="currentStatus"
              value={formData.currentStatus}
              onChange={handleChange}
              placeholder="Current Status"
              required
            />
            <input
              type="number"
              name="totalExperience"
              value={formData.totalExperience}
              onChange={handleChange}
              placeholder="Total Experience (Years)"
              required
            />
            <input
              type="text"
              name="currentPosition"
              value={formData.currentPosition}
              onChange={handleChange}
              placeholder="Current Position"
              required
            />
            <input
              type="text"
              name="jobExperiences"
              value={formData.jobExperiences}
              onChange={handleChange}
              placeholder="Job Experiences (e.g., Role at Company)"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="submitContainer">
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>  
  );
};

export default MultiStepForm;
