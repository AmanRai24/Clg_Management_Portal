const express = require('express');
const router = express.Router();
const passport = require('passport');
const student_controller = require('../controllers/student_controller');
// const assignment_controller = require('../controllers/assignment_controller');

router.post('/signup',student_controller.register);
router.post('/login',student_controller.login);
// router.get('/allassignment',assignment_controller.fetchAllAssignment);

module.exports = router; 