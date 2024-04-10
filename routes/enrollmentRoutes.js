const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');
const { authenticateToken } = require('../middlewares/authMiddleware');

// Course Enrollment
router.post('/:courseId/enroll', authenticateToken, enrollmentController.enrollCourse);

// View Enrolled Courses
router.get('/enrolled', authenticateToken, enrollmentController.getEnrolledCourses);

module.exports = router;
