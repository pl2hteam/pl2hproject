const express = require('express');
const router = express.Router();
const logs = require('./logs/logs');

// 라우터
router.use('/users', logs);

module.exports = router;

