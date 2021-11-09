const express = require('express');
const router = express.Router();
const user = require('./users');
const post = require('./posts')

// 라우터
router.use('/users', user);
router.use('/posts', post);


module.exports = router;