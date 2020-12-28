const express = require('express');
const router = express.Router();
const teacher_controller = require('../controllers/teacher_controller');

router.post('/signup', teacher_controller.register);
router.post('/login', teacher_controller.login);

module.exports = router;