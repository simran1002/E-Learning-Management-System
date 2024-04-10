const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware'); // Corrected path
const userController = require('../controllers/userController'); // Import userController

router.get('/:userId', authMiddleware.authenticateToken, userController.getUserById);

router.put('/profile', authMiddleware.authenticateToken, userController.updateUserProfile);

module.exports = router;
