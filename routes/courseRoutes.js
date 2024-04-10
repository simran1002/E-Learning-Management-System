const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware'); // Corrected path

router.post('/', authMiddleware.authenticateToken, authMiddleware.superadminOnly, courseController.createCourse);
router.put('/:courseId', authMiddleware.authenticateToken, authMiddleware.superadminOnly, courseController.updateCourse);
router.delete('/:courseId', authMiddleware.authenticateToken, authMiddleware.superadminOnly, courseController.deleteCourse);

module.exports = router;
