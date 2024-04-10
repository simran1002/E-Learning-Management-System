const express = require('express');
const router = express.Router();
const userRegistrationController = require('../controllers/userRegistrationController');

// User Registration
router.post('/register', userRegistrationController.registerUser);

module.exports = router;
