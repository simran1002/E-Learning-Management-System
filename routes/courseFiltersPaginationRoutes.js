// routes/courseFiltersPagination/courseFiltersPaginationRoutes.js

const express = require('express');
const router = express.Router();
const { filterCourses, paginateCourses } = require('../controllers/courseFiltersPaginationController');

// Route for filtering courses
router.get('/filter', filterCourses);

// Route for paginating courses
router.get('/paginate/:page', paginateCourses);

module.exports = router;
