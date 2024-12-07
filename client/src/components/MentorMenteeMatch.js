// src/components/MentorMenteeMatch.js
import React, { useState, useEffect } from 'react';
import { getBestMatch } from '../api/api';

const MentorMenteeMatch = () => {
  const [bestMatch, setBestMatch] = useState(null);
  const [error, setError] = useState(null);

  const fetchBestMatch = async () => {
    try {
      const { data } = await getBestMatch(["Math", "JavaScript"], ["Web Development", "AI"]);
      setBestMatch(data);
    } catch (err) {
      setError('Error fetching best match');
    }
  };

  useEffect(() => {
    fetchBestMatch();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Mentor/Mentee Match</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {bestMatch ? (
        bestMatch.map((match) => (
          <div key={match.id}>
            <h3>{match.name}</h3>
            <p>Email: {match.email}</p>
            <p>Role: {match.role}</p>
            <p>Skills: {match.skills.join(', ')}</p>
            <p>Interests: {match.interests.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>Loading match...</p>
      )}
    </div>
  );
};

export default MentorMenteeMatch;
