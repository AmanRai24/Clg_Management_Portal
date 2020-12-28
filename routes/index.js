const express = require('express');
const router = express.Router();

console.log('Router Loaded');

//route to different endpoints
router.use('/teacher',require('./teacher'));
router.use('/student',require('./student'));

module.exports = router; 