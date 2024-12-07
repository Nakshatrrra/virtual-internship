
import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { getAllUsers } from '../api/api';
import { useNavigate } from 'react-router-dom';

const ProfileSetup = () => {
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([]);
//   const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data } = await getAllUsers();
      setProfiles(data);
    };
    fetchProfiles();
  }, []);

  const handleMatch = (skills, interests) => {
    // Match logic or navigate to match page
    console.log('Matching with skills:', skills, 'and interests:', interests);
    navigate('/mentor-mentee-match');
  };

  return (
    <div className="container mt-5">
      <h2>Profile Setup</h2>
      <div className="mb-4">
        <h3>Your Profile</h3>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>Skills: {user?.skills}</p>
        <p>Interests: {user?.interests}</p>
      </div>
      <button className="btn btn-success" onClick={() => handleMatch(user?.skills, user?.interests)}>
        Find Mentorship Matches
      </button>
      <div className="mt-5">
        <h3>Potential Matches</h3>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <h4>{profile.name}</h4>
            <p>Role: {profile.role}</p>
            <p>Skills: {profile.skills.join(', ')}</p>
            <p>Interests: {profile.interests.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSetup;
