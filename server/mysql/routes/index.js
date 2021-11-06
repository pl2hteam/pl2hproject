const express = require('express');
const router = express.Router();
const user = require('./logs/logs');

// 라우터
router.use('/user', user);


module.exports = router;