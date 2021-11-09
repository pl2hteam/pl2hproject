const express = require('express');
const router = express.Router();
const user = require('./users');

// 라우터
router.use('/users', user);


module.exports = router;