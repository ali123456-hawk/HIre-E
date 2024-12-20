// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add more routes for your app, such as Dashboard */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
