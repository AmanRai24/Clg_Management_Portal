const express = require('express');
const router = express.Router();
const passport = require('passport');
const student_controller = require('../controllers/student_controoler');
// const assignment_controller = require('../controllers/assignment_controller');

router.post('/signup',buyer_controller.register);
router.post('/login',buyer_controller.login);
// router.get('/allassignment',assignment_controller.fetchAllAssignment);

module.exports = router; 