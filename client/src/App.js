import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Added Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css';

import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import ProfileSetup from './components/ProfileSetup';
import MentorMenteeMatch from './components/MentorMenteeMatch';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/mentor-mentee-match" element={<MentorMenteeMatch />} />
          <Route
            path="/"
            element={
              <div className="text-center">
                <h1>Welcome to the Mentorship Platform</h1>
                <div>
                  <Link to="/register">
                    <button className="btn btn-primary m-2">Sign Up</button>
                  </Link>
                  <Link to="/login">
                    <button className="btn btn-secondary m-2">Login</button>
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
