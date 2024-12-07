const express = require('express');
const router = express.Router();
const { getBestMentorMatch } = require('../controllers/mentorController');

router.get('/matches/mentor', getBestMentorMatch);

module.exports = router;