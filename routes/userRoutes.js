const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController'); 

router.get('/:userId', authMiddleware.authenticateToken, userController.getUserById);

router.put('/profile', authMiddleware.authenticateToken, userController.updateUserProfile);

module.exports = router;
