// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/MultiStepForm";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Dashboard from "./components/Dashboard/Dashboard";
import JobSearch from "./components/JobSearch/JobSearch";
import EmployeerSignIn from "./components/Employeer/EmployeerSignIn";
import EmployeerSignUp from "./components/Employeer/EmployeerSignUp";
import Success from "./components/Employeer/Success";
import "../src/App.css";


const App = () => {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          
            <Route path="/signup" element={<SignUp />} />

        
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/JobSearch" element={<JobSearch />} />
          <Route path="/EmployeerSignIn" element={<EmployeerSignIn />} />
          <Route path="/EmployeerSignUp" element={<EmployeerSignUp />} />
          <Route path="/Success" element={<Success />} />



          <Route path="/" element={<SignIn />} />
          {/* Add more routes for your app, such as Dashboard */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
