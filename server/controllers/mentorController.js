const User = require('../models/User');

const getBestMentorMatch = async (req, res) => {
  const menteeId = req.query.menteeId;

  try {
    const mentee = await User.findOne({
      where: { id: menteeId, role: 'mentee' }
    });

    if (!mentee) {
      return res.status(404).json({ message: 'Mentee not found' });
    }

    const mentors = await User.findAll({
      where: { role: 'mentor' }
    });

    const menteeSkills = mentee.skills || [];
    const menteeInterests = mentee.interests || [];

    const mentorMatches = mentors.map(mentor => {
      const mentorSkills = mentor.skills || [];
      const mentorInterests = mentor.interests || [];

      const skillMatches = menteeSkills.filter(skill => mentorSkills.includes(skill)).length;

      const interestMatches = menteeInterests.filter(interest => mentorInterests.includes(interest)).length;

      const totalMatches = skillMatches + interestMatches;

      return {
        id: mentor.id,
        name: mentor.name,
        email: mentor.email,
        skills: mentor.skills,
        interests: mentor.interests,
        totalMatches,
      };
    });

    mentorMatches.sort((a, b) => b.totalMatches - a.totalMatches);

    const bestMatch = mentorMatches[0];
    
    if (bestMatch) {
      res.json([bestMatch]);
    } else {
      res.status(404).json({ message: 'No suitable mentor found' });
    }
    
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mentor match', error: error.message });
  }
};

module.exports = { getBestMentorMatch };
