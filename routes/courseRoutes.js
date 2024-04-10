const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { authenticateToken, superadminOnly } = require('../middlewares/authMiddleware');
const courseFiltersPaginationController = require('../controllers/courseFiltersPaginationController');

// Get Courses with Filtering and Pagination
router.get('/', courseController.getCourses);

// CRUD operations for courses (Superadmin only)
router.post('/', authenticateToken, superadminOnly, courseController.createCourse);
router.get('/:courseId', courseController.getCourseById);
router.put('/:courseId', authenticateToken, superadminOnly, courseController.updateCourse);
router.delete('/:courseId', authenticateToken, superadminOnly, courseController.deleteCourse);


// Get Courses
router.get('/', courseController.getCourses);

// Filter and Pagination
router.get('/filter', courseFiltersPaginationController.filterCourses);
router.get('/page/:page', courseFiltersPaginationController.paginateCourses);


module.exports = router;
