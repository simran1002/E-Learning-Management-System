const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');

// User Profile
router.get('/profile/:userId', userProfileController.getUserProfile);

// Update User Profile
router.put('/profile/:userId', userProfileController.updateUserProfile);

module.exports = router;
